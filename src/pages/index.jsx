import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: "Jumex",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: "Telmex",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: "Microsoft",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: "Coca-Cola",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: "HyrAr",
    },
  ];

  return clientes;
}

function Index() {
  const clientes = useLoaderData();
  console.log(clientes);
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