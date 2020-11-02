import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import useTaggedProjects from 'hooks/useTaggedProjects';
import Button from 'components/Button';
import { TagField } from 'components/Form/Fields';

const TaggedProjectTagsField = ({ projectId, selected }) => {
  const { addTaggedProject, deleteTaggedProject } = useTaggedProjects();

  const onSubmit = ({ tags }) => {
    tags.forEach((tagId) => {
      addTaggedProject({ projectId, tagId });
    });
  };

  const existingTags = selected.map((tag) => {
    return (
      <Button key={tag.id} onClick={() => deleteTaggedProject({ id: tag.id })}>
        {tag.tag.name}&nbsp;&nbsp;&nbsp;X
      </Button>
    );
  });

  return (
    <section>
      {existingTags}
      <Form
        onSubmit={onSubmit}
        initialValues={{ projectId }}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <TagField name="tags" label="Tags" category="all" multiple />
              </div>
              <div className="buttons">
                <Button
                  onClick={() => onSubmit(values)}
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          );
        }}
      />
    </section>
  );
};

TaggedProjectTagsField.defaultProps = {
  selected: []
};

TaggedProjectTagsField.propTypes = {
  projectId: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.shape)
};
export default TaggedProjectTagsField;
