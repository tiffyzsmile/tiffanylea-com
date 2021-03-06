import React, { useState } from 'react';
import { Form } from 'react-final-form';
import useTaggedProjects from 'hooks/useTaggedProjects';
import Button from 'components/Button';
import { DebugField, ProjectField, TagField } from 'components/Form/Fields';

const TaggedProject = () => {
  const [idToEdit, setIdToEdit] = useState();
  const [taggedProjectValues, setTaggedProjectValues] = useState();
  const {
    getTaggedProjects,
    deleteTaggedProject,
    updateTaggedProject
  } = useTaggedProjects();
  const { loading, data, error } = getTaggedProjects();

  const onSubmit = ({ id, project: { id: projectId }, tag: { id: tagId } }) => {
    updateTaggedProject({ id, tagId, projectId });
    setIdToEdit(0);
  };

  const taggedProjectsContent = (taggedProjects) =>
    taggedProjects.map((n) => {
      if (idToEdit === n.id) {
        return (
          <tr key={n.id}>
            <td>
              <ProjectField name="project.id" />
            </td>
            <td>
              <TagField name="tag.id" />
            </td>
            <td className="center">
              <div className="buttons">
                <Button onClick={() => onSubmit(taggedProjectValues)}>
                  Submit
                </Button>
              </div>
            </td>
          </tr>
        );
      }
      return (
        <tr key={n.id}>
          <td>{n.project.name}</td>
          <td>{n.tag.name}</td>
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
                deleteTaggedProject({
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
      <h1>Tagged Projects</h1>
      <p>
        This page is just for reference and debugging purposes. Most updates
        should be made directly in the project edit screen.
      </p>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <Form
          onSubmit={onSubmit}
          initialValues={data.filter((d) => d.id === idToEdit)[0]}
          render={({ handleSubmit, form, values }) => {
            setTaggedProjectValues(values);
            return (
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Tag</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{taggedProjectsContent(data)}</tbody>
                </table>
              </form>
            );
          }}
        />
      )}
      <DebugField values={taggedProjectValues} />
    </div>
  );
};

export default TaggedProject;
