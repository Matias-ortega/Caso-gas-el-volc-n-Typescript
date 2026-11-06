import FormularioRegistro from "../organism/FormularioRegistro";

function Registro() {
  return (
    <div className="container mt-4" style={{ maxWidth: "420px" }}>
      <h2 className="text-center">Crear cuenta</h2>
      <FormularioRegistro />
    </div>
  );
}

export default Registro;