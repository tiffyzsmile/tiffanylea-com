import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams, useHistory } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import Button from 'components/Button';
import {
  S3FileUpload,
  EmployerField,
  ClientField,
  TaggedProjectTagsField,
  DateField,
  BooleanField,
  UrlField,
  DescriptionField,
  IdField,
  NameField,
  LogoField,
  DebugField
} from 'components/Form/Fields';

const styles = {
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '60% 40%'
  }
};

const Project = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    getProject,
    addProject,
    updateProject,
    deleteProject
  } = useProjects();
  const {
    loading,
    data = { id: '', name: '', images: [], tags: {}, logo: '' }
  } = getProject(id);

  const onSubmit = formValues => {
    if (id) {
      updateProject(formValues);
    } else {
      addProject(formValues, onCompleteData => {
        history.push(`/admin/project/${onCompleteData.id}`);
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
              deleteProject({
                id
              })
            }
          >
            Delete Project
          </Button>
        </div>
      )}
      <h1>Project Details</h1>
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
                  <LogoField folder={`${values.id}`} />
                  <EmployerField />
                  <ClientField />
                  <DateField />
                  <UrlField />
                  <DescriptionField />
                  <div>
                    <label htmlFor="images">
                      Screenshots
                      <Field
                        id="images"
                        name="images"
                        render={({ input }) => {
                          return (
                            <S3FileUpload
                              {...input}
                              filePath={id}
                              multiple
                              alt={`Screenshot of ${values.name || ''}`}
                            />
                          );
                        }}
                      />
                    </label>
                  </div>
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
          <TaggedProjectTagsField
            projectId={data.id}
            selected={data.tags.items}
          />
        </section>
      </div>
    </div>
  );
};

export default Project;
