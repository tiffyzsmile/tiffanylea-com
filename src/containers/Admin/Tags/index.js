import React from 'react';
import { useHistory } from 'react-router-dom';
import useTags from 'hooks/useTags';
import Button from 'components/Button';

const Tag = () => {
  const history = useHistory();
  const { getTags, deleteTag } = useTags();
  const { loading, data, error } = getTags();

  const tagsContent = tags =>
    tags.map(n => {
      return (
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{n.category}</td>
          <td>
            {n.logo && (
              <img
                style={{ maxWidth: '100px', maxHeight: '100px' }}
                src={n.logo}
                alt={`Logo of ${n.name}`}
              />
            )}
          </td>
          <td className="center">
            <Button
              styleAs="link"
              onClick={() => history.push(`/admin/tag/${n.id}`)}
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
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/tag`)}>
          Add Tag
        </Button>
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Category</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tagsContent(data)}</tbody>
        </table>
      )}
    </div>
  );
};

export default Tag;
