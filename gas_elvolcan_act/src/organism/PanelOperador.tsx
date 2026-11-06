import { useState } from "react";
import type { Pedido } from "./FormularioPago";
import { cargarUsuarios } from "./FormularioRegistro";

function PanelOperador() {
  const [pedidos, setPedidos] = useState<Pedido[]>(() =>
    JSON.parse(localStorage.getItem("pedidos") ?? "[]")
  );
  const [elegidos, setElegidos] = useState<Record<number, string>>({});

  const repartidores = cargarUsuarios().filter((u) => u.rol === "repartidor");

  const asignar = (id: number) => {
    const email = elegidos[id];
    if (!email) {
      alert("Elige un repartidor");
      return;
    }
    const nuevos = pedidos.map((p) =>
      p.id === id ? { ...p, repartidor: email, estado: "asignado" as const } : p
    );
    setPedidos(nuevos);
    localStorage.setItem("pedidos", JSON.stringify(nuevos));
  };

  if (pedidos.length === 0) return <h4 className="text-center">No hay pedidos todavía</h4>;

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>N°</th>
            <th>Cliente</th>
            <th>Dirección</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Repartidor</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p) => {
            const puedeAsignar = p.estado === "pendiente" || p.estado === "asignado";
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.cliente}</td>
                <td>{p.direccion}</td>
                <td>
                  {p.items.map((i) => (
                    <div key={i.id}>{i.titulo} x{i.cantidad}</div>
                  ))}
                </td>
                <td>${p.total.toLocaleString("es-CL")}</td>
                <td><span className="badge text-bg-secondary">{p.estado}</span></td>
                <td>
                  {puedeAsignar ? (
                    <div className="d-flex gap-2">
                      <select
                        className="form-select form-select-sm"
                        value={elegidos[p.id] ?? p.repartidor}
                        onChange={(e) => setElegidos({ ...elegidos, [p.id]: e.target.value })}
                      >
                        <option value="">Elegir...</option>
                        {repartidores.map((r) => (
                          <option key={r.email} value={r.email}>{r.nombre}</option>
                        ))}
                      </select>
                      <button className="btn btn-primary btn-sm" onClick={() => asignar(p.id)}>
                        Enviar
                      </button>
                    </div>
                  ) : (
                    p.repartidor
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PanelOperador;