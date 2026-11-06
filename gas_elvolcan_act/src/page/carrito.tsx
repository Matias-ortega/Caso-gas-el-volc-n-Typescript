import { useState } from "react";
import { Link } from "react-router-dom";
import CardCarrito from "../molecule/CardCarrito"; // ajusta la ruta

interface ItemCarrito {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  cantidad: number;
}

function Carrito() {
  const [items, setItems] = useState<ItemCarrito[]>(() =>
    JSON.parse(localStorage.getItem("carrito") ?? "[]")
  );

  const guardar = (nuevos: ItemCarrito[]) => {
    setItems(nuevos);
    localStorage.setItem("carrito", JSON.stringify(nuevos));
  };

  const cambiarCantidad = (id: number, nuevaCantidad: number) => {
    guardar(items.map((i) => (i.id === id ? { ...i, cantidad: nuevaCantidad } : i)));
  };

  const eliminar = (id: number) => {
    guardar(items.filter((i) => i.id !== id));
  };

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
const totalUnidades = items.reduce((acc, i) => acc + i.cantidad, 0);

if (items.length === 0) return <h2 className="text-center">El carrito está vacío</h2>;

return (
  <div className="container-fluid px-3 px-md-4 mt-3">
    <h1 className="text-center mb-4">CARRITO</h1>

    <div className="row g-4">
      {/* Productos */}
      <div className="col-12 col-lg-8">
        <div className="row g-3">
          {items.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-xl-4">
              <CardCarrito
                {...item}
                onCambiarCantidad={cambiarCantidad}
                onEliminar={eliminar}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Resumen */}
      <div className="col-12 col-lg-4">
        <div className="card sticky-lg-top" style={{ top: "1rem" }}>
          <div className="card-body">
            <h4 className="card-title">Resumen</h4>
            <hr />

            {items.map((i) => (
              <div key={i.id} className="d-flex justify-content-between mb-1 gap-2">
                <span>{i.titulo} x{i.cantidad}</span>
                <span>${(i.precio * i.cantidad).toLocaleString("es-CL")}</span>
              </div>
            ))}

            <hr />
            <p className="mb-1">Unidades: {totalUnidades}</p>
            <h4 className="d-flex justify-content-between">
              <span>Total:</span>
              <span>${total.toLocaleString("es-CL")}</span>
            </h4>

            <Link to="/pago" className="btn btn-success w-100 mt-3">Comprar</Link>
            <button className="btn btn-outline-danger w-100 mt-2" onClick={() => guardar([])}>
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Carrito;