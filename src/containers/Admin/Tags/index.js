import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import useTags from 'hooks/useTags';
import Button from 'components/Button';
import { CategoryField, DebugField } from 'components/Form/Fields';

const Tag = () => {
  const [idToEdit, setIdToEdit] = useState();
  const [tagValues, setTagValues] = useState();
  const { getTags, addTag, deleteTag, updateTag } = useTags();
  const { loading, data, error } = getTags();

  const onSubmit = formValues => {
    // If this is an existing tag
    if (idToEdit === formValues.id) {
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
              <label htmlFor="id">
                Tag ID
                <Field
                  id="id"
                  name="id"
                  component="input"
                  placeholder="Tag ID"
                />
              </label>
            </td>
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
          <td>{n.id}</td>
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
                      <th>ID</th>
                      <th>Tag</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="0">
                      <td>
                        <label htmlFor="id">
                          Tag ID
                          <Field
                            id="id"
                            name="id"
                            component="input"
                            placeholder="Tag ID"
                          />
                        </label>
                      </td>
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
                </table>
              </form>
            );
          }}
        />
      )}

      <DebugField values={tagValues} />
    </div>
  );
};

export default Tag;
