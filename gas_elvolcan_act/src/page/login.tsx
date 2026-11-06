import FormularioInicioSesion from "../organism/FormularioInicioSesion";

function Login() {
  return (
    <div className="container mt-4" style={{ maxWidth: "420px" }}>
      <h2 className="text-center">Iniciar sesión</h2>
      <FormularioInicioSesion />
    </div>
  );
}

export default Login;