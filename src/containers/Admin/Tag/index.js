import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useParams, useHistory } from 'react-router-dom';
import useTags from 'hooks/useTags';
import Button from 'components/Button';
import {
  BooleanField,
  CategoryField,
  IdField,
  NameField,
  LogoField,
  DebugField,
  TaggedProjectProjectsField
} from 'components/Form/Fields';

const styles = {
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '60% 40%'
  }
};

const Tag = () => {
  const { id } = useParams();
  const [bulkEdit, setBulkEdit] = useState(true);
  const history = useHistory();
  const { getTag, addTag, updateTag, deleteTag } = useTags();
  const {
    loading,
    data = { id: '', name: '', images: [], projects: {} }
  } = getTag(id);

  const onSubmit = formValues => {
    if (id) {
      updateTag(formValues);
    } else {
      addTag(formValues, onCompleteData => {
        // bulk edit will just be one tag after another
        if (!bulkEdit) {
          history.push(`/admin/tag/${onCompleteData.id}`);
        }
      });
    }
  };

  return (
    <div>
      {id && (
        <div style={{ float: 'right' }}>
          <Button
            styleAs="link"
            onClick={() =>
              deleteTag({
                id
              })
            }
          >
            Delete Tag
          </Button>
        </div>
      )}
      <h1>Tag Details</h1>
      <label htmlFor="bulkEdit">
        Bulk Edit:
        <input
          style={{ display: 'inline' }}
          type="checkbox"
          value={bulkEdit}
          checked={bulkEdit}
          onChange={e => {
            setBulkEdit(e.target.checked);
          }}
        />
      </label>
      <div style={styles.gridWrapper}>
        <section>
          <Form
            onSubmit={onSubmit}
            initialValues={data}
            render={({ handleSubmit, pristine, form, submitting, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  {loading && <div className="loading" />}
                  <IdField />
                  <NameField />
                  <BooleanField label="Display?" name="display" />
                  <CategoryField />
                  <LogoField folder="tag-logos" />
                  <div className="buttons">
                    <Button
                      onClick={() => onSubmit(values)}
                      disabled={submitting || pristine}
                    >
                      Submit
                    </Button>
                  </div>
                  <DebugField values={values} />
                </form>
              );
            }}
          />
        </section>
        <section>
          <TaggedProjectProjectsField
            tagId={data.id}
            selected={data.projects.items}
          />
        </section>
      </div>
    </div>
  );
};

export default Tag;
