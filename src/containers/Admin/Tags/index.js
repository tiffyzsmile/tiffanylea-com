import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import useTags from 'hooks/useTags';
import Button from 'components/Button';
import CategoryField from 'components/CategoryField';

const Tag = () => {
  const [idToEdit, setIdToEdit] = useState();
  const [tagValues, setTagValues] = useState();
  const { getTags, addTag, deleteTag, updateTag } = useTags();
  const { loading, data, error } = getTags();

  const onSubmit = formValues => {
    if (formValues.id) {
      updateTag(formValues);
    } else {
      addTag(formValues);
    }
    setIdToEdit(0);
  };

  const tagsContent = tags =>
    tags.map(n => {
      if (idToEdit === n.id) {
        return (
          <tr key={n.id}>
            <td>
              <label htmlFor="name">
                Tag Name
                <Field
                  id="name"
                  name="name"
                  component="input"
                  placeholder="Tag Name"
                />
              </label>
            </td>
            <td>
              <CategoryField />
            </td>
            <td className="center">
              <div className="buttons">
                <Button onClick={() => onSubmit(tagValues)}>Submit</Button>
                <Button styleAs="link" onClick={() => setIdToEdit(0)}>
                  Cancel
                </Button>
              </div>
            </td>
          </tr>
        );
      }
      return (
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{n.category}</td>
          <td className="center">
            <Button
              styleAs="link"
              onClick={() => {
                setIdToEdit(n.id);
              }}
            >
              Edit
            </Button>
            <Button
              styleAs="link"
              onClick={() =>
                deleteTag({
                  id: n.id
                })
              }
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <div>
      <h1>Tags</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <Form
          onSubmit={onSubmit}
          initialValues={data.filter(d => d.id === idToEdit)[0]}
          render={({ handleSubmit, form, values }) => {
            setTagValues(values);
            return (
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th>Tag</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="0">
                      <td>
                        <label htmlFor="name">
                          Tag Name
                          <Field
                            id="name"
                            name="name"
                            component="input"
                            placeholder="Tag Name"
                          />
                        </label>
                      </td>
                      <td>
                        <CategoryField />
                      </td>
                      <td className="center">
                        <div className="buttons">
                          <Button onClick={() => onSubmit(tagValues)}>
                            Submit
                          </Button>
                        </div>
                      </td>
                    </tr>

                    {tagsContent(data)}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">
                        <Button
                          onClick={() =>
                            addTag({
                              name: `Example Tag ${Math.floor(
                                Math.random() * 5000
                              )}`
                            })
                          }
                          type="button"
                        >
                          Add Tag
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </form>
            );
          }}
        />
      )}
      <pre>{JSON.stringify(tagValues, 0, 2)}</pre>
    </div>
  );
};

export default Tag;
