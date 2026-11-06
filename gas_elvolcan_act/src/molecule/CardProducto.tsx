import BotonProducto from "../atoms/BotonProducto";
import BotonAgregar from "../atoms/botonAgregarProducto"; 

interface Cardprops {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

function CardProductos({ id, titulo, descripcion, precio, stock, imagen }: Cardprops) {
  return (
    <div className="card h-100">
      <img
        src={imagen}
        className="card-img-top img-fluid"
        alt={titulo}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text fw-bold">${precio.toLocaleString("es-CL")}</p>
        <p className="card-text">Stock: {stock}</p>

        <div className="mt-auto d-flex flex-wrap gap-2 justify-content-center">
          <BotonProducto
            id={id}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            stock={stock}
            imagen={imagen}
          />
          <BotonAgregar
            id={id}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            stock={stock}
            imagen={imagen}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProductos;