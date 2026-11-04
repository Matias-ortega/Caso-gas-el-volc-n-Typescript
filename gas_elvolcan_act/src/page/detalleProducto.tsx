import { useLocation, Link } from "react-router-dom";

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

function DetalleProducto() {
  const { state } = useLocation();
  const producto = state as Producto | null;

  if (!producto) {
    return (
      <div className="container mt-4">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-secondary">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <h4>${producto.precio}</h4>
          <p>Stock: {producto.stock}</p>

          <Link to="/productos" className="btn btn-secondary">Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;