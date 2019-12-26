import React from 'react';
import { useHistory } from 'react-router-dom';
import useTags from 'hooks/useTags';
import Button from 'components/Button';
import { CategoryFilter, SearchFilter } from 'components/Form/Filters';

const Tags = () => {
  const history = useHistory();
  const { getTags, deleteTag } = useTags();
  // const [{ tags: data }] = useStateValue();
  // const { data1 } = getTags();
  // useEffect(() => {
  //   console.log('data', data);
  //   console.log('data1', data1);
  //   // getTags();
  // }, []);
  const { data = [] } = getTags();
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
      <SearchFilter />
      <table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>
              <CategoryFilter />
            </th>
            <th>Logo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tagsContent(data)}</tbody>
      </table>
    </div>
  );
};

export default Tags;
