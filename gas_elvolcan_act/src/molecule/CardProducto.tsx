import BotonAgregar from "../atoms/botonAgregarProducto";
import BotonProducto from "../atoms/BotonProducto";

interface Cardprops{
    id:number;
    titulo: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
}
function CardProductos({id,titulo,descripcion,precio,stock,imagen}: Cardprops){
    return(
        <div className="card" style={{ width: '20rem'}}>
            <img
            src={imagen}
            className="card-img-top"
            alt={titulo}
            style={{height: '200px',objectFit:'contain'}}
            />
            <div className=" card-body">
                <h5 className="card-title">
                    {titulo}
                </h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">${precio}</p>
                <p className="card-text">Stock:{stock}</p>
                <div className="mt-auto">
                <BotonProducto id={id}
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                stock={stock}
                imagen={imagen}/>
                <br />
                <br />
                <BotonAgregar
                id={id}
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                stock={stock}
                imagen={imagen}/>
                </div>
                
            </div>
        </div>
    )
}
export default CardProductos