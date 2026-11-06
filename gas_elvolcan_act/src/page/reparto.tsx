import PanelReparto from "../organism/PanelRepartidor";

function Reparto() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");

  if (sesion?.rol !== "repartidor") {
    return <h2 className="text-center">No tienes permiso para ver esta página</h2>;
  }

  return (
    <div className="container-fluid px-3 px-md-4">
      <h1 className="text-center mb-4">MIS PEDIDOS</h1>
      <PanelReparto />
    </div>
  );
}

export default Reparto;