import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import useTaggedProjects from 'hooks/useTaggedProjects';
import Button from 'components/Button';
import { ProjectField } from 'components/Form/Fields';

const TaggedProjectProjectsField = ({ tagId, selected }) => {
  const { addTaggedProject, deleteTaggedProject } = useTaggedProjects();

  const onSubmit = ({ projects }) => {
    projects.forEach(projectId => {
      addTaggedProject({ tagId, projectId });
    });
  };

  const existingProjects = selected.map(project => {
    return (
      <Button
        key={project.id}
        onClick={() => deleteTaggedProject({ id: project.id })}
      >
        {project.project.name}&nbsp;&nbsp;&nbsp;X
      </Button>
    );
  });

  return (
    <section>
      {existingProjects}
      <Form
        onSubmit={onSubmit}
        initialValues={{ tagId }}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <ProjectField
                  name="projects"
                  label="Projects"
                  category="all"
                  multiple
                />
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

TaggedProjectProjectsField.defaultProps = {
  selected: []
};

TaggedProjectProjectsField.propTypes = {
  tagId: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.shape)
};
export default TaggedProjectProjectsField;
