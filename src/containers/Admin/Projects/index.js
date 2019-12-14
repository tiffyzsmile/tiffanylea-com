import React from 'react';
import { Link } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import Button from 'components/Button';

const Projects = () => {
  const { getProjects, addProject, deleteProject } = useProjects();
  const { loading, data, error } = getProjects();

  const projectsContent = projects =>
    projects.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/project/${n.id}`}>{n.name}</Link>
          </td>
          <td className="center">
            <Button
              onClick={() =>
                deleteProject({
                  id: n.id
                })
              }
              type="button"
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Projects</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{projectsContent(data)}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button
                  onClick={() =>
                    addProject({
                      name: `Example Project ${Math.floor(
                        Math.random() * 5000
                      )}`
                    })
                  }
                  type="button"
                >
                  Add Project
                </Button>
                <Link to="/admin/project">Add Project</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Projects;
