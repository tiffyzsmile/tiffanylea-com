import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams, useHistory } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import Button from 'components/Button';
import S3FileUpload from 'components/S3FileUpload';
import EmployerField from 'components/EmployerField';
import ClientField from 'components/ClientField';
import TaggedProjectField from 'components/TaggedProjectField';
import DatePicker from 'components/DatePicker';
import BooleanField from 'components/BooleanField';

const styles = {
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '60% 40%'
  }
};

const Project = () => {
  const { id } = useParams();
  const history = useHistory();
  const { getProject, addProject, updateProject } = useProjects();
  const {
    loading,
    data = { id: '', name: '', images: [], tags: {} }
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
                  <div>
                    <label htmlFor="id">
                      Project ID
                      <Field
                        id="id"
                        name="id"
                        component="input"
                        placeholder="Project ID"
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="name">
                      Project Name
                      <Field
                        id="name"
                        name="name"
                        component="input"
                        placeholder="Project Name"
                      />
                    </label>
                  </div>
                  <div>
                    <BooleanField label="Display?" name="display" />
                  </div>
                  <div>
                    <label htmlFor="date">
                      Date:
                      <Field
                        id="date"
                        name="date"
                        render={({ input }) => {
                          return (
                            <DatePicker
                              {...input}
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                            />
                          );
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <br />
                    <label htmlFor="description">
                      Project Description
                      <Field
                        id="description"
                        name="description"
                        component="textarea"
                        placeholder="Project Description"
                      />
                    </label>
                  </div>
                  <div>
                    <EmployerField />
                  </div>
                  <div>
                    <ClientField />
                  </div>
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
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              );
            }}
          />
        </section>
        <section>
          <TaggedProjectField projectId={data.id} selected={data.tags.items} />
        </section>
      </div>
    </div>
  );
};

export default Project;
