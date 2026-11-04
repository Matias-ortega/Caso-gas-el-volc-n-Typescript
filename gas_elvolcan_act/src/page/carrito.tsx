import { useState } from "react";
import CardProductos from "../molecule/CardProducto";

interface CarritoProps {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  cantidad: number;
}

function Carrito() {
  const [items] = useState<CarritoProps[]>(() =>
    JSON.parse(localStorage.getItem("carrito") ?? "[]")
  );

  if (items.length === 0) return <h2>El carrito está vacío</h2>;

  return (
    <div>
      <h1>CARRITO</h1>
      <div className="d-flex flex-wrap gap-3">
        {items.map((item) => (
          <CardProductos
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            stock={item.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrito