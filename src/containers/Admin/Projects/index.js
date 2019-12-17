import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import Button from 'components/Button';

const Projects = () => {
  const history = useHistory();
  const { getProjects } = useProjects();
  const { loading, data, error } = getProjects();

  const projectsContent = projects =>
    projects.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/project/${n.id}`}>{n.name}</Link>
          </td>
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
      <h1>Projects</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/project`)}>
          Add Project
        </Button>
      </div>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Project</th>
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
