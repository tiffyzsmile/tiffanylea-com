import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';

const Employers = () => {
  const history = useHistory();
  const { getEmployers } = useEmployers();
  const { loading, data = [], error } = getEmployers();

  const employersContent = (employers) =>
    employers.map((n) => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/employer/${n.id}`}>{n.name}</Link>
          </td>
          <td>
            <img
              style={{ maxWidth: '100px', maxHeight: '100px' }}
              src={n.logo}
              alt={`Logo of ${n.name}`}
            />
          </td>
          <td className="center">
            <Button
              styleAs="link"
              onClick={() => history.push(`/admin/employer/${n.id}`)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Employers ({data.length})</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/employer`)}>
          Add Employer
        </Button>
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Employer</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{employersContent(data)}</tbody>
        </table>
      )}
    </div>
  );
};

Employers.defaultProps = {};

Employers.propTypes = {};

export default Employers;
