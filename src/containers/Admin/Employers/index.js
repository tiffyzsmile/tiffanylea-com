import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';

const Employers = () => {
  const history = useHistory();
  const { getEmployers, deleteEmployer } = useEmployers();
  const { loading, data, error } = getEmployers();

  const employersContent = employers =>
    employers.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/employer/${n.id}`}>{n.name}</Link>
          </td>
          <td className="center">
            <Button
              styleAs="link"
              onClick={() => history.push(`/admin/employer/${n.id}`)}
            >
              Edit
            </Button>
            <Button
              styleAs="link"
              onClick={() =>
                deleteEmployer({
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
      <h1>Employers</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Employer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{employersContent(data)}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button onClick={() => history.push(`/admin/employer`)}>
                  Add Employer
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

Employers.defaultProps = {};

Employers.propTypes = {};

export default Employers;
