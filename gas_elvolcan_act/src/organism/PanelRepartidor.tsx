import { useState } from "react";
import type { Pedido, Estado } from "./FormularioPago";

function PanelReparto() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");

  const [pedidos, setPedidos] = useState<Pedido[]>(() =>
    JSON.parse(localStorage.getItem("pedidos") ?? "[]")
  );

  // Solo los pedidos enviados a este repartidor
  const misPedidos = pedidos.filter((p) => p.repartidor === sesion?.email);

  const cambiarEstado = (id: number, estado: Estado) => {
    const nuevos = pedidos.map((p) => (p.id === id ? { ...p, estado } : p));
    setPedidos(nuevos);
    localStorage.setItem("pedidos", JSON.stringify(nuevos));
  };

  if (misPedidos.length === 0) return <h4 className="text-center">No tienes pedidos asignados</h4>;

  return (
    <div className="row g-3">
  {misPedidos.map((p) => (
    <div key={p.id} className="col-12 col-md-6 col-xl-4">
      <div className="card h-100">
        <div className="card-body">
            <h5 className="card-title">Pedido N° {p.id}</h5>
            <p className="mb-1"><strong>Cliente:</strong> {p.cliente}</p>
            <p className="mb-1"><strong>Dirección:</strong> {p.direccion}</p>
            {p.items.map((i) => (
              <div key={i.id}>{i.titulo} x{i.cantidad}</div>
            ))}
            <p className="mt-2"><strong>Total:</strong> ${p.total.toLocaleString("es-CL")}</p>

            <label className="form-label">Estado</label>
            <select
              className="form-select"
              value={p.estado}
              onChange={(e) => cambiarEstado(p.id, e.target.value as Estado)}
            >
              <option value="asignado">Asignado</option>
              <option value="en camino">En camino</option>
              <option value="entregado">Entregado</option>
            </select>
          </div>
        </div>
          </div>
      ))}
    </div>
  );
}

export default PanelReparto;