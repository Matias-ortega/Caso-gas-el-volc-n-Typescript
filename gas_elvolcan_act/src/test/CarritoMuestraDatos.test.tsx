// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardCarrito from "../molecule/CardCarrito";

it("CardCarrito muestra título, descripción y cantidad", () => {
  render(
    <CardCarrito
      id={1}
      titulo="Galon de gas de 5kg"
      descripcion="Cilindro de 5 kg"
      precio={6000}
      imagen="/img/galon_5kg.jpg"
      cantidad={3}
      stock={10}
      onCambiarCantidad={() => {}}
      onEliminar={() => {}}
    />
  );

  expect(screen.getByText("Galon de gas de 5kg")).toBeInTheDocument();
  expect(screen.getByText("Cilindro de 5 kg")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
});