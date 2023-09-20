import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  console.log(datos);

  return { ok: true };
}

function NuevoCliente() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="px-3 py-1 font-bold text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="px-5 py-10 mx-auto mt-20 bg-white rounded-md shadow md:w-3/4">
        <Form method="post">
          <Formulario />

          <input
            type="submit"
            className="w-full p-3 mt-5 text-lg font-bold text-white uppercase bg-blue-800"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
