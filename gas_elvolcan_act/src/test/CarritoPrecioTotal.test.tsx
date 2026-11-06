// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardCarrito from "../molecule/CardCarrito";

it("CardCarrito calcula el subtotal (precio x cantidad)", () => {
  render(
    <CardCarrito
      id={1}
      titulo="Galon"
      descripcion="Cilindro"
      precio={6000}
      imagen="/img/a.jpg"
      cantidad={2}
      stock={10}
      onCambiarCantidad={() => {}}
      onEliminar={() => {}}
    />
  );

  expect(screen.getByText(/Subtotal:/)).toHaveTextContent("12");
  expect(screen.getByText(/Subtotal:/).textContent).toMatch(/12\D?000/);
});