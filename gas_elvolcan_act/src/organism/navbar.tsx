import { Link } from "react-router-dom";
function Barra(){
    return(
    <nav className="navbar navbar-expand bg-dark">
        <div className="container">
            <span className="navbar-brand text-white">
            Gas el volcan
            </span>
            <div className="navbar-nav">
                <Link className="nav-link text-white" to="/inicio">
                inicio</Link>
                <Link className="nav-link text-white" to="/productos">
                productos</Link>
                <Link className="nav-link text-white" to="/carrito">
                Carrito</Link>
            </div>
            
        </div>
    </nav>
    )
}
export default Barra