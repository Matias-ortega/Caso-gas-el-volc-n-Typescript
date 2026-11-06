import { Link } from "react-router-dom";
import { productosIniciales } from "../page/productos";
import type { Producto } from "../page/productos";

function PortadaInicio() {
  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");

  const guardados = localStorage.getItem("productos");
  const productos: Producto[] = guardados ? JSON.parse(guardados) : productosIniciales;
  const destacados = productos.slice(0, 3);

  return (
    <div>
      
      <section className="bg-dark text-white text-center py-5 px-3">
        <h1 className="display-4 fw-bold">Gas el volcan</h1>
        <p className="lead">
          Cilindros de gas, reguladores y accesorios con entrega a domicilio.
        </p>
        {sesion && <p>Hola, <strong>{sesion.nombre}</strong> 👋</p>}
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <Link to="/productos" className="btn btn-primary btn-lg">Ver productos</Link>
          {!sesion && (
            <Link to="/registro" className="btn btn-outline-light btn-lg">Crear cuenta</Link>
          )}
        </div>
      </section>

      
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="fs-1">🚚</div>
            <h5>Entrega a domicilio</h5>
            <p className="text-muted">Te llevamos tu cilindro hasta la puerta de tu casa.</p>
          </div>
          <div className="col-md-4">
            <div className="fs-1">🔒</div>
            <h5>Productos seguros</h5>
            <p className="text-muted">Mangueras y reguladores homologados para tu tranquilidad.</p>
          </div>
          <div className="col-md-4">
            <div className="fs-1">💳</div>
            <h5>Paga fácil</h5>
            <p className="text-muted">Compra en línea y recibe tu boleta al instante.</p>
          </div>
        </div>
      </section>

      
      <section className="container pb-5">
        <h2 className="text-center mb-4">Productos destacados</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {destacados.map((p) => (
            <div key={p.id} className="card" style={{ width: "18rem" }}>
              <img
                src={p.imagen}
                alt={p.titulo}
                className="card-img-top"
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{p.titulo}</h5>
                <p className="card-text">${p.precio.toLocaleString("es-CL")}</p>
                <Link to="/productos" className="btn btn-outline-primary">Ver en tienda</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-light text-center py-5 px-3">
        <h3>¿Se te acabó el gas?</h3>
        <p className="text-muted">Haz tu pedido ahora y te lo llevamos.</p>
        <Link to="/productos" className="btn btn-success btn-lg">Pedir ahora</Link>
      </section>
    </div>
  );
}

export default PortadaInicio;