interface botonAgregarProductoProps {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

function BotonAgregar({ id, titulo, descripcion, precio, stock, imagen }: botonAgregarProductoProps) {
  const handleAgregar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") ?? "[]");
    const existente = carrito.find((i: { id: number }) => i.id === id);

    if (existente) {
      if (existente.cantidad >= stock) {
        alert("No hay más stock disponible");
        return;
      }
      existente.cantidad += 1;
    } else {
      carrito.push({ id, titulo, descripcion, precio, stock, imagen, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleAgregar}
      disabled={stock < 1}
    >
      {stock < 1 ? "Sin stock" : "Agregar al carrito"}
    </button>
  );
}

export default BotonAgregar;