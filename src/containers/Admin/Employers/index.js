import React from 'react';
import { Link } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';

const Employers = () => {
  const { getEmployers, addEmployer, deleteEmployer } = useEmployers();
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
              onClick={() =>
                deleteEmployer({
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
      <h1>Employers</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Employer</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{employersContent(data)}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button
                  onClick={() =>
                    addEmployer({
                      name: `Example Employer ${Math.floor(
                        Math.random() * 5000
                      )}`
                    })
                  }
                  type="button"
                >
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

export default Employers;
