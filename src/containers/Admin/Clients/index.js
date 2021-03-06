import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useClients from 'hooks/useClients';
import Button from 'components/Button';
import { SearchFilter } from 'components/Form/Filters';
import { useStateValue } from 'containers/Admin/State';

const Clients = () => {
  const [{ currentSearch }] = useStateValue();
  const history = useHistory();
  const { getClients } = useClients();
  const { loading, data = [] } = getClients({ search: currentSearch });

  const clientsContent = (clients) =>
    clients.map((n) => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/client/${n.id}`}>{n.name}</Link>
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
      <h1>Clients ({data.length})</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/client`)}>
          Add Client
        </Button>
      </div>
      <SearchFilter />
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
