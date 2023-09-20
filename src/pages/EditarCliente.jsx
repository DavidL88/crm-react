import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El cliente no fue encontrado",
    });
  }
  return cliente;

  // return { ok: true };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  //Actualizar el cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect("/");
}

function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
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
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="w-full p-3 mt-5 text-lg font-bold text-white uppercase bg-blue-800"
            value="Guardar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default EditarCliente;
