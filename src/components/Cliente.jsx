import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect("/");
}

function Cliente({ cliente }) {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="font-bold text-gray-800 uppercase">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-gray-800 uppercase">Tel: </span>
          {telefono}
        </p>
      </td>

      <td className="flex gap-3 p-6">
        <button
          type="button"
          className="text-xs font-bold text-blue-600 uppercase hover:text-blue-700"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-xs font-bold text-red-600 uppercase hover:text-red-700"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;
