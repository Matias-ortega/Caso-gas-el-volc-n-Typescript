import { Link } from "react-router-dom";

interface BotonProductoProps {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

function BotonProducto(props: BotonProductoProps) {
  return (
    <Link
      to={`/producto/${props.id}`}
      state={props}
      className="btn btn-primary"
    >
      ver producto
    </Link>
  );
}

export default BotonProducto;