import { useState } from "react";
import CampoFormularios from "../molecule/CampoFormularios";
import BotonFormulario from "../atoms/BotonFormulario";
import { productosIniciales } from "../page/productos";
import type { Producto } from "../page/productos";

function cargarProductos(): Producto[] {
  const guardados = localStorage.getItem("productos");
  if (guardados) return JSON.parse(guardados);
  localStorage.setItem("productos", JSON.stringify(productosIniciales));
  return productosIniciales;
}

function PanelAdmin() {
  const [productos, setProductos] = useState<Producto[]>(cargarProductos);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  const guardar = (nuevos: Producto[]) => {
    setProductos(nuevos);
    localStorage.setItem("productos", JSON.stringify(nuevos));
  };

  const limpiar = () => {
    setEditandoId(null);
    setTitulo("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setImagen("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!titulo.trim() || !descripcion.trim() || !precio || !stock || !imagen.trim()) {
      setError("Completa todos los campos");
      return;
    }
    if (Number(precio) <= 0) {
      setError("El precio debe ser mayor a 0");
      return;
    }
    if (!Number.isInteger(Number(stock)) || Number(stock) < 0) {
      setError("El stock debe ser un número entero (0 o más)");
      return;
    }

    const datos = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      precio: Number(precio),
      stock: Number(stock),
      imagen: imagen.trim(),
    };

    if (editandoId !== null) {
      // Modificar
      guardar(productos.map((p) => (p.id === editandoId ? { ...p, ...datos } : p)));
    } else {
      // Agregar
      const nuevoId = productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1;
      guardar([...productos, { id: nuevoId, ...datos }]);
    }
    limpiar();
  };

  const editar = (p: Producto) => {
    setEditandoId(p.id);
    setTitulo(p.titulo);
    setDescripcion(p.descripcion);
    setPrecio(String(p.precio));
    setStock(String(p.stock));
    setImagen(p.imagen);
    setError("");
  };

  const eliminar = (id: number) => {
    if (!confirm("¿Eliminar este producto?")) return;
    guardar(productos.filter((p) => p.id !== id));
    if (editandoId === id) limpiar();
  };

  return (
    <div className="row">
      {/* Formulario */}
      <div className="col-lg-4 mb-4">
        <h5>{editandoId !== null ? `Editando producto ${editandoId}` : "Agregar producto"}</h5>
        <form onSubmit={handleSubmit} noValidate>
          <CampoFormularios etiqueta="Título" tipo="text" nombre="titulo" valor={titulo} alCambiar={setTitulo} />
          <CampoFormularios etiqueta="Descripción" tipo="text" nombre="descripcion" valor={descripcion} alCambiar={setDescripcion} />
          <CampoFormularios etiqueta="Precio" tipo="number" nombre="precio" valor={precio} alCambiar={setPrecio} />
          <CampoFormularios etiqueta="Stock" tipo="number" nombre="stock" valor={stock} alCambiar={setStock} />
          <CampoFormularios etiqueta="Imagen (ruta)" tipo="text" nombre="imagen" valor={imagen} alCambiar={setImagen} />

          {error && <div className="alert alert-danger">{error}</div>}
          <BotonFormulario texto={editandoId !== null ? "Guardar cambios" : "Agregar"} />
          {editandoId !== null && (
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={limpiar}>
              Cancelar
            </button>
          )}
        </form>
      </div>

      {/* Tabla */}
      <div className="col-lg-8">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Precio</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img src={p.imagen} alt={p.titulo} style={{ height: 40, width: 40, objectFit: "contain" }} />
                  </td>
                  <td>{p.titulo}</td>
                  <td>${p.precio.toLocaleString("es-CL")}</td>
                  <td>{p.stock}</td>
                  <td className="text-end">
                    <button className="btn btn-outline-primary btn-sm me-2" onClick={() => editar(p)}>
                      Editar
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => eliminar(p.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PanelAdmin;