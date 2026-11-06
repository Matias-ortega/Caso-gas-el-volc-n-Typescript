import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardProductos from "../molecule/CardProducto";

it("40. CardProductos muestra título, descripción e imagen", () => {
  render(
    <MemoryRouter>
      <CardProductos
        id={1}
        titulo="Galon de gas de 5kg"
        descripcion="Cilindro de 5 kg"
        precio={6000}
        stock={80}
        imagen="/img/galon_5kg.jpg"
      />
    </MemoryRouter>
  );

  expect(screen.getByText("Galon de gas de 5kg")).toBeInTheDocument();
  expect(screen.getByText("Cilindro de 5 kg")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Galon de gas de 5kg");
});