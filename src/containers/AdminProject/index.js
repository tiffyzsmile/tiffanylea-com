import React from 'react';
import Page from 'components/Page';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useProjects from 'hooks/useProjects';

const Project = () => {
  const { id } = useParams();
  // const [status, setStatus] = useState('not submitted');
  // const { register, handleSubmit, errors } = useForm();
  const { getProject, updateProject } = useProjects();
  const { loading, data, error } = getProject(id);
  // const [values, setValues] = useState({
  //   name: loading ? '' : data.name,
  //   description: loading ? '' : data.description
  // });
  //  const [showEdit, setShowEdit] = useState(false);

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  const onSubmit = ({ name, description }) => {
    updateProject({
      id,
      name,
      description
    });
  };

  return (
    <Page isAdmin title="Project Detail" description="Project Detail">
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <section>
          <p>Project Name: {data.name}</p>
          <p>Project Description: {data.description}</p>
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
                  <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              );
            }}
          />
        </section>
      )}
    </Page>
  );
};

export default Project;
