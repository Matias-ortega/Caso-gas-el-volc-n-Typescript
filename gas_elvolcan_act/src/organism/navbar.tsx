import { Link, useNavigate, useLocation } from "react-router-dom";

function Barra() {
  const navigate = useNavigate();
  useLocation(); // hace que la barra se actualice al cambiar de página

  const sesion = JSON.parse(localStorage.getItem("sesion") ?? "null");
  const rol: string | undefined = sesion?.rol;

  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-print-none">
      <div className="container-fluid">
        <Link to="/inicio" className="navbar-brand">Gas el volcan</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <Link to="/inicio" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>

            {/* Carrito: solo clientes o visitantes */}
            {(!sesion || rol === "cliente") && (
              <li className="nav-item">
                <Link to="/carrito" className="nav-link">Carrito</Link>
              </li>
            )}

            {/* Enlaces por rol */}
            {rol === "admin" && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Administrar</Link>
              </li>
            )}
            {rol === "operador" && (
              <li className="nav-item">
                <Link to="/operador" className="nav-link">Pedidos</Link>
              </li>
            )}
            {rol === "repartidor" && (
              <li className="nav-item">
                <Link to="/reparto" className="nav-link">Mis pedidos</Link>
              </li>
            )}

            {/* Sesión */}
            {!sesion ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Iniciar sesión</Link>
                </li>
                <li className="nav-item">
                  <Link to="/registro" className="nav-link">Registrarse</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="navbar-text me-md-3">Hola, {sesion.nombre}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm" onClick={cerrarSesion}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Barra;