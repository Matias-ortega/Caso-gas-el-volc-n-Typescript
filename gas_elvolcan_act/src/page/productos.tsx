import CardProductos from "../molecule/CardProducto";

function Productos(){
    return(
        <div>
    <h1>PRODUCTOS</h1>
    <div className="d-flex flex-wrap gap-3">
        <CardProductos
        id={1}
        titulo="Galon de gas de 5kg"
        descripcion="Cilindro de gas licuado de petróleo 5 kg. Para uso residencial (cocina,
calefacción pequeña)."
        precio={6000}
        imagen="public\img\galon_5kg.jpg"
        stock={80}/>
        
        <CardProductos
        id={2}
        titulo="Galon de gas de 11kg"
        descripcion="Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible
con reguladores estándar."
        precio={11000}
        imagen="public\img\galon_11kg.jpg"
        stock={200}/>

        <CardProductos
        id={3}
        titulo="Galon de gas de 15kg"
        descripcion="Cilindro de mayor capacidad para hogares de alto consumo o locales
pequeños."
        precio={14500}
        imagen="public\img\galon_15kg.jpg"
        stock={90}/>

        <CardProductos
        id={4}
        titulo="Galon de gas de 45kg"
        descripcion="Cilindro industrial. Uso comercial: restaurantes, talleres, calefacción de
locales."
        precio={40000}
        imagen="public\img\galon_de_45kg.jpg"
        stock={30}/>

        <CardProductos
        id={5}
        titulo="Regulador doméstico estándar"
        descripcion="Regulador de 1 etapa para cilindros 5, 11 y 15 kg. Presión de salida 28 mbar. "
        precio={8200}
        imagen="public\img\Regulador_domestico.jpg"
        stock={45}/>

        <CardProductos
        id={6}
        titulo="Regulador de alta presión"
        descripcion="Regulador para cocinas industriales o equipos de mayor consumo. Presión
regulable."
        precio={17000}
        imagen="public\img\Regulador_alta_presion.jpg"
        stock={12}/>
        <CardProductos
        id={7}
        titulo="Regulador dual"
        descripcion="Permite conectar dos artefactos simultáneamente al mismo cilindro."
        precio={13500}
        imagen="public\img\Regulador_dual.jpg"
        stock={18}/>

        <CardProductos
        id={8}
        titulo="Manguera gas 1.5 m"
        descripcion="Manguera flexible homologada. Diámetro interior 9mm. Compatible con
reguladores estándar."
        precio={3500}
        imagen="public\img\Mangera_1_5.jpg"
        stock={80}/>

        <CardProductos
        id={9}
        titulo="Manguera gas 3 m"
        descripcion="Manguera larga para instalaciones donde el artefacto está alejado del cilindro."
        precio={6200}
        imagen="public\img\Mangera_3m.jpg"
        stock={50}/>

        <CardProductos
        id={10}
        titulo="Abrazadera metálica"
        descripcion="Abrazadera de acero para asegurar la conexión manguera-regulador y
manguera-artefacto."
        precio={800}
        imagen="public\img\Abrazaderas.jpg"
        stock={200}/>

        <CardProductos
        id={11}
        titulo="Kit conexión completo (regulador +
manguera 1.5m + abrazaderas)"
        descripcion="Todo lo necesario para instalar un cilindro nuevo."
        precio={11500}
        imagen="public\img\Kit.jpg"
        stock={25}/>
        <CardProductos
        id={12}
        titulo="Carro porta cilindro 11/15 kg"
        descripcion="Carro metálico con ruedas para transportar cilindros dentro del hogar con
seguridad."
        precio={11000}
        imagen="public\img\Carro_que_carrea.jpg"
        stock={20}/>

        <CardProductos
        id={13}
        titulo="Tapa protectora para válvula"
        descripcion="Tapa de plástico ABS para proteger la válvula del cilindro durante el
transporte."
        precio={1200}
        imagen="public\img\tapa_proctetora.jpg"
        stock={60}/>

        <CardProductos
        id={14}
        titulo="Detector de gas a batería"
        descripcion="Sensor electroquímico. Alarma sonora y visual ante fuga de gas GLP o metano."
        precio={17000}
        imagen="public\img\Dectetor_de_gas.jpg"
        stock={8}/>
    </div>
    </div>
    )
}
export default Productos;