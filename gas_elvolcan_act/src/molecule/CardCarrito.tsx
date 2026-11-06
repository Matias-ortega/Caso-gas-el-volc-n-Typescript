interface CardCarritoprops {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
  stock: number;
  onCambiarCantidad: (id: number, nuevaCantidad: number) => void;
  onEliminar: (id: number) => void;
}

function CardCarrito({
  id, titulo, descripcion, precio, imagen, cantidad, stock,
  onCambiarCantidad, onEliminar,
}: CardCarritoprops) {
  return (
    <div className="card h-100">
      <img
        src={imagen}
        className="card-img-top img-fluid"
        alt={titulo}
        style={{ height: "180px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Precio: ${precio.toLocaleString("es-CL")}</p>

        <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => onCambiarCantidad(id, cantidad - 1)}
            disabled={cantidad <= 1}
          >
            −
          </button>
          <span>{cantidad}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => onCambiarCantidad(id, cantidad + 1)}
            disabled={cantidad >= stock}
          >
            +
          </button>
        </div>

        <p className="card-text">
          <strong>Subtotal: ${(precio * cantidad).toLocaleString("es-CL")}</strong>
        </p>

        <button className="btn btn-danger w-100 mt-auto" onClick={() => onEliminar(id)}>
          Quitar
        </button>
      </div>
    </div>
  );
}

export default CardCarrito;