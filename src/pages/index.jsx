import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full mt-5 bg-white shadow table-auto">
          <thead className="text-white bg-blue-800">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-10 text-center">No Hay Clientes Aún</p>
      )}
    </>
  );
}

export default Index;
