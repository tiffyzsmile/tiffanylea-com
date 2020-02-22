import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import Button from 'components/Button';
import { SearchFilter } from 'components/Form/Filters';
import { useStateValue } from 'containers/Admin/State';

const Projects = () => {
  const [
    {
      filters: { search },
      sort
    },
    dispatch
  ] = useStateValue();
  const history = useHistory();
  const { getProjects } = useProjects();
  const { loading, data = [], error } = getProjects({
    search,
    sort,
    showAll: true
  });

  const updateSort = newSort => {
    dispatch({
      type: 'updateSort',
      newSort
    });
  };

  const projectsContent = projects =>
    projects.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/project/${n.id}`}>{n.name}</Link>
          </td>
          <td>{n.date}</td>
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
              onClick={() => history.push(`/admin/project/${n.id}`)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <div>
      <h1>Projects ({data.length})</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/project`)}>
          Add Project
        </Button>
      </div>
      <SearchFilter />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th
                onClick={() =>
                  updateSort({
                    field: 'name',
                    direction: sort.direction === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                Project
              </th>
              <th
                onClick={() =>
                  updateSort({
                    field: 'date',
                    direction: sort.direction === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                Date
              </th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{projectsContent(data)}</tbody>
        </table>
      )}
    </div>
  );
};

export default Projects;
