import { useState } from "react";
import { Link } from "react-router-dom";
import CampoFormularios from "../molecule/CampoFormularios";
import BotonFormulario from "../atoms/BotonFormulario";
export type Estado = "pendiente" | "asignado" | "en camino" | "entregado";


interface ItemCarrito {
  id: number;
  titulo: string;
  precio: number;
  cantidad: number;
}
export interface Pedido {
  id: number;
  fecha: string;
  cliente: string;
  email: string;
  direccion: string;
  items: { id: number; titulo: string; precio: number; cantidad: number }[];
  total: number;
  estado: Estado;
  repartidor: string; // email del repartidor ("" si no tiene)
}

function FormularioPago() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");
  const items: ItemCarrito[] = JSON.parse(localStorage.getItem("carrito") ?? "[]");

  const [direccion, setDireccion] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  
  const [boleta, setBoleta] = useState<{
    fecha: string;
    direccion: string;
    tarjeta: string;
    items: ItemCarrito[];
    total: number;
  } | null>(null);

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    if (direccion.trim().length < 5) {
      alert("Ingresa una dirección válida");
      return;
    }
    if (!/^\d{16}$/.test(tarjeta.replace(/\s/g, ""))) {
      alert("La tarjeta debe tener 16 dígitos");
      return;
    }
    const pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos") ?? "[]");
    const nuevoPedido: Pedido = {
  id: pedidos.length > 0 ? Math.max(...pedidos.map((p) => p.id)) + 1 : 1001,
  fecha: new Date().toLocaleString("es-CL"),
  cliente: sesion.nombre,
  email: sesion.email,
  direccion: direccion.trim(),
  items: items.map(({ id, titulo, precio, cantidad }) => ({ id, titulo, precio, cantidad })),
  total,
  estado: "pendiente",
  repartidor: "",
};
localStorage.setItem("pedidos", JSON.stringify([...pedidos, nuevoPedido]));

    
    setBoleta({
      fecha: new Date().toLocaleString("es-CL"),
      direccion: direccion.trim(),
      tarjeta: tarjeta.replace(/\s/g, "").slice(-4),
      items,
      total,
    });
    localStorage.setItem("carrito", JSON.stringify([]));
  };

  
  if (boleta) {
    return (
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h4 className="text-center">Gas el volcan</h4>
          <p className="text-center mb-0">BOLETA</p>
          <p className="text-center text-muted">{boleta.fecha}</p>
          <hr />

          <p className="mb-1"><strong>Cliente:</strong> {sesion?.nombre}</p>
          <p className="mb-1"><strong>Dirección:</strong> {boleta.direccion}</p>
          <p className="mb-1"><strong>Pago:</strong> Tarjeta terminada en {boleta.tarjeta}</p>
          <hr />

          {boleta.items.map((i) => (
            <div key={i.id} className="d-flex justify-content-between">
              <span>{i.titulo} x{i.cantidad}</span>
              <span>${(i.precio * i.cantidad).toLocaleString("es-CL")}</span>
            </div>
          ))}
          <hr />

          <h5 className="d-flex justify-content-between">
            <span>Total pagado:</span>
            <span>${boleta.total.toLocaleString("es-CL")}</span>
          </h5>

          <p className="text-center text-muted mt-3">¡Gracias por su compra!</p>
          <Link to="/productos" className="btn btn-primary w-100">Seguir comprando</Link>
        </div>
      </div>
    );
  }

  if (!sesion) {
    return (
      <div className="text-center">
        <h4>Debes iniciar sesión para pagar</h4>
        <Link to="/login" className="btn btn-primary mt-2">Iniciar sesión</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h4>Tu carrito está vacío</h4>
        <Link to="/productos" className="btn btn-primary mt-2">Ver productos</Link>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} noValidate style={{ maxWidth: "420px" }} className="mx-auto">
      <p>Total a pagar: <strong>${total.toLocaleString("es-CL")}</strong></p>

      <CampoFormularios etiqueta="Dirección de entrega" tipo="text" nombre="direccion" valor={direccion} alCambiar={setDireccion} />
      <CampoFormularios etiqueta="Número de tarjeta" tipo="text" nombre="tarjeta" valor={tarjeta} alCambiar={setTarjeta} />


      <BotonFormulario texto="Pagar" />
    </form>
  );
}

export default FormularioPago;