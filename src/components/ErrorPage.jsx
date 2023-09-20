import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="mt-20 text-6xl font-extrabold text-center text-blue-900">
        CRM - Clientes
      </h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
}
