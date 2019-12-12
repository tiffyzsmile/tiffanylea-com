import React from 'react';
import { Link } from 'react-router-dom';
import useClients from 'hooks/useClients';
import Button from 'components/Button';

const Clients = () => {
  const { getClients, addClient, deleteClient } = useClients();
  const { loading, data, error } = getClients();

  const clientsContent = clients =>
    clients.map(n => {
      return (
        <tr key={n.id}>
          <td>
            <Link to={`/admin/client/${n.id}`}>{n.name}</Link>
          </td>
          <td className="center">
            <Button
              onClick={() =>
                deleteClient({
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
      <h1>Clients</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{clientsContent(data)}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button
                  onClick={() =>
                    addClient({
                      name: `Example Client ${Math.floor(Math.random() * 5000)}`
                    })
                  }
                >
                  Add Client
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Clients;
