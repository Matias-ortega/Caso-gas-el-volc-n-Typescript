import CardProductos from "../molecule/CardProducto";
import { useState } from "react";

export interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}
export const productosIniciales: Producto[] = [
  {
    id: 1,
    titulo: "Galon de gas de 5kg",
    descripcion: "Cilindro de gas licuado de petróleo 5 kg. Para uso residencial (cocina, calefacción pequeña).",
    precio: 6000,
    stock: 80,
    imagen: "/img/galon_5kg.jpg",
  },
  {
    id: 2,
    titulo: "Galon de gas de 11kg",
    descripcion: "Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible con reguladores estándar.",
    precio: 11000,
    stock: 200,
    imagen: "/img/galon_11kg.jpg",
  },
  {
    id: 3,
    titulo: "Galon de gas de 15kg",
    descripcion: "Cilindro de mayor capacidad para hogares de alto consumo o locales pequeños.",
    precio: 14500,
    stock: 90,
    imagen: "/img/galon_15kg.jpg",
  },
  {
    id: 4,
    titulo: "Galon de gas de 45kg",
    descripcion: "Cilindro industrial. Uso comercial: restaurantes, talleres, calefacción de locales.",
    precio: 40000,
    stock: 30,
    imagen: "/img/galon_de_45kg.jpg",
  },
  {
    id: 5,
    titulo: "Regulador doméstico estándar",
    descripcion: "Regulador de 1 etapa para cilindros 5, 11 y 15 kg. Presión de salida 28 mbar.",
    precio: 8200,
    stock: 45,
    imagen: "/img/Regulador_domestico.jpg",
  },
  {
    id: 6,
    titulo: "Regulador de alta presión",
    descripcion: "Regulador para cocinas industriales o equipos de mayor consumo. Presión regulable.",
    precio: 17000,
    stock: 12,
    imagen: "/img/Regulador_alta_presion.jpg",
  },
  {
    id: 7,
    titulo: "Regulador dual",
    descripcion: "Permite conectar dos artefactos simultáneamente al mismo cilindro.",
    precio: 13500,
    stock: 18,
    imagen: "/img/Regulador_dual.jpg",
  },
  {
    id: 8,
    titulo: "Manguera gas 1.5 m",
    descripcion: "Manguera flexible homologada. Diámetro interior 9mm. Compatible con reguladores estándar.",
    precio: 3500,
    stock: 80,
    imagen: "/img/Mangera_1_5.jpg",
  },
  {
    id: 9,
    titulo: "Manguera gas 3 m",
    descripcion: "Manguera larga para instalaciones donde el artefacto está alejado del cilindro.",
    precio: 6200,
    stock: 50,
    imagen: "/img/Mangera_3m.jpg",
  },
  {
    id: 10,
    titulo: "Abrazadera metálica",
    descripcion: "Abrazadera de acero para asegurar la conexión manguera-regulador y manguera-artefacto.",
    precio: 800,
    stock: 200,
    imagen: "/img/Abrazaderas.jpg",
  },
  {
    id: 11,
    titulo: "Kit conexión completo (regulador + manguera 1.5m + abrazaderas)",
    descripcion: "Todo lo necesario para instalar un cilindro nuevo.",
    precio: 11500,
    stock: 25,
    imagen: "/img/Kit.jpg",
  },
  {
    id: 12,
    titulo: "Carro porta cilindro 11/15 kg",
    descripcion: "Carro metálico con ruedas para transportar cilindros dentro del hogar con seguridad.",
    precio: 11000,
    stock: 20,
    imagen: "/img/Carro_que_carrea.jpg",
  },
  {
    id: 13,
    titulo: "Tapa protectora para válvula",
    descripcion: "Tapa de plástico ABS para proteger la válvula del cilindro durante el transporte.",
    precio: 1200,
    stock: 60,
    imagen: "/img/tapa_proctetora.jpg",
  },
  {
    id: 14,
    titulo: "Detector de gas a batería",
    descripcion: "Sensor electroquímico. Alarma sonora y visual ante fuga de gas GLP o metano.",
    precio: 17000,
    stock: 8,
    imagen: "/img/Dectetor_de_gas.jpg",
  },
];

function Productos() {
  const [productos] = useState<Producto[]>(() => {
  const guardados = localStorage.getItem("productos");
  if (guardados) return JSON.parse(guardados);

  localStorage.setItem("productos", JSON.stringify(productosIniciales));
  return productosIniciales;
});

 return (
  <div className="container-fluid px-3 px-md-4 mt-3">
    <h1 className="text-center mb-4">PRODUCTOS</h1>

    <div className="row g-3">
      {productos.map((p) => (
        <div key={p.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
          <CardProductos {...p} />
        </div>
      ))}
    </div>
  </div>
);
}

export default Productos;