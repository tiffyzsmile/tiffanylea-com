import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';
import S3ImageUpload from 'components/S3ImageUpload';

const Project = () => {
  const { id } = useParams();
  const { getProject, updateProject } = useProjects();
  const { loading, data, error } = getProject(id);
  const { getEmployers } = useEmployers();
  const {
    loading: loadingEmployers,
    data: employers,
    error: employersError
  } = getEmployers();

  const onSubmit = ({ id: projectId, name, description, employer }) => {
    updateProject({
      id: projectId,
      name,
      description,
      projectEmployerId: employer.id
    });
  };

  // may want to remove this completely and make it an autocomplete field
  const employersOptionList = (employers || []).map(e => {
    return (
      <option key={e.id} value={e.id}>
        {e.name}
      </option>
    );
  });

  return (
    <div>
      <h1>Project Details</h1>
      <S3ImageUpload />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <section>
          <Form
            onSubmit={onSubmit}
            initialValues={data}
            render={({ handleSubmit, pristine, form, submitting, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  {loading && <div className="loading" />}
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
                    <label htmlFor="employer">
                      Employer
                      <Field
                        id="employer"
                        name="employer.id"
                        component="select"
                      >
                        {loadingEmployers && <option>Loading Employers</option>}
                        {employersError && (
                          <option>Error Loading Employers</option>
                        )}
                        <option />
                        {employersOptionList}
                      </Field>
                    </label>
                  </div>
                  <div className="buttons">
                    <Button
                      onClick={() => onSubmit(values)}
                      type="submit"
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
      )}
    </div>
  );
};

export default Project;
