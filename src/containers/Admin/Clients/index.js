import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useClients from 'hooks/useClients';
import Button from 'components/Button';

const Clients = () => {
  const history = useHistory();
  const { getClients } = useClients();
  const { loading, data } = getClients();

  const clientsContent = clients =>
    clients.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/client/${n.id}`}>{n.name}</Link>
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
              onClick={() => history.push(`/admin/client/${n.id}`)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Clients</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/client`)}>
          Add Client
        </Button>
      </div>
      {loading && <h1>Loading...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{clientsContent(data)}</tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
