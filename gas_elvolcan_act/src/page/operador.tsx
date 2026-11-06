import PanelOperador from "../organism/PanelOperador";

function Operador() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");

  if (sesion?.rol !== "operador") {
    return <h2 className="text-center">No tienes permiso para ver esta página</h2>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">PEDIDOS (OPERADOR)</h1>
      <PanelOperador />
    </div>
  );
}

export default Operador;