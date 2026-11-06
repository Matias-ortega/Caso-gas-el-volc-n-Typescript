import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BotonAgregar from "../atoms/botonAgregarProducto";

it(" al hacer clic en 'Agregar al carrito' se guarda el producto", () => {
  render(
    <BotonAgregar
      id={1}
      titulo="Galon de gas de 5kg"
      descripcion="Cilindro 5 kg"
      precio={6000}
      stock={5}
      imagen="/img/galon_5kg.jpg"
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "Agregar al carrito" }));

  const carrito = JSON.parse(localStorage.getItem("carrito") ?? "[]");

  expect(carrito).toHaveLength(1);
  expect(carrito[0].titulo).toBe("Galon de gas de 5kg");
  expect(carrito[0].cantidad).toBe(1);
});