import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import useTags from 'hooks/useTags';
import Button from 'components/Button';

const Tag = () => {
  const [idToEdit, setIdToEdit] = useState();
  const [tagValues, setTagValues] = useState();
  const { getTags, addTag, deleteTag, updateTag } = useTags();
  const { loading, data, error } = getTags();

  const onSubmit = ({ id: tagId, name, category }) => {
    updateTag({
      id: tagId,
      name,
      category
    });
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
              <label htmlFor="category">
                Category
                <Field id="category" name="category" component="select">
                  <option />
                  <option value="industry">Industry</option>
                  <option value="language">Language</option>
                  <option value="type">Type</option>
                </Field>
              </label>
            </td>
            <td className="center">
              <div className="buttons">
                <Button onClick={() => onSubmit()} type="submit">
                  Submit
                </Button>
              </div>
            </td>
          </tr>
        );
      }
      return (
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{n.categories}</td>
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

  // may want to remove this completely and make it an autocomplete field
  // const employersOptionList = (employers || []).map(e => {
  //   return (
  //     <option key={e.id} value={e.id}>
  //       {e.name}
  //     </option>
  //   );
  // });

  return (
    <div>
      <h1>Tags</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <Form
          onSubmit={onSubmit}
          initialValues={data.filter(d => d.id === idToEdit)}
          render={({ handleSubmit, form, values }) => {
            setTagValues(values);
            return (
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th>Tag</th>
                      <th>Categories</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{tagsContent(data)}</tbody>
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

      <h1>Tag Details</h1>
      <pre>{JSON.stringify(tagValues, 0, 2)}</pre>
    </div>
  );
};

export default Tag;
