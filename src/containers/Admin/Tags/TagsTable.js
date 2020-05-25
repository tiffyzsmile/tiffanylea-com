import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';
import { CategoryFilter } from 'components/Form/Filters';
import categories from 'data/categories';

const TagsTable = ({ tags = [], onDelete }) => {
  const history = useHistory();
  const tagsContent = tagsArray =>
    tagsArray.map(n => {
      return (
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{categories[n.category]}</td>
          <td>
            {n.logo && (
              <img
                style={{ maxWidth: '25px', maxHeight: '25px' }}
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
            <Button styleAs="link" onClick={() => onDelete(n.id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });

  return (
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
      <tbody>{tagsContent(tags)}</tbody>
    </table>
  );
};

TagsTable.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDelete: PropTypes.func.isRequired
};
export default TagsTable;
