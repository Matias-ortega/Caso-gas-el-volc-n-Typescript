import PanelAdmin from "../organism/PanelAdmin.tsx";

function Admin() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");

  if (sesion?.rol !== "admin") {
    return <h2 className="text-center mt-4">No tienes permiso para ver esta página</h2>;
  }

  return (
    <div className="container-fluid px-3 px-md-4">
      <h1 className="text-center mb-4">ADMINISTRAR PRODUCTOS</h1>
      <PanelAdmin />
    </div>
  );
}

export default Admin;