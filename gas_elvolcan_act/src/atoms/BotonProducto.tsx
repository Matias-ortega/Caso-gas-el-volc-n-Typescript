import { Link } from "react-router-dom";
interface BotonProductoProps{
    id: number;
}
function BotonProducto({id}: BotonProductoProps){
    return(
    <Link to={`/producto/${id}`} className=" btn btn-primary"> ver producto</Link>
    )
}
export default BotonProducto    