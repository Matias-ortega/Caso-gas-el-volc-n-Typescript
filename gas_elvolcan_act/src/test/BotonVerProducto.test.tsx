import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BotonProducto from "../atoms/BotonProducto";

it("BotonProducto dice 'ver producto' y apunta a /producto/:id", () => {
  render(
    <MemoryRouter>
      <BotonProducto
        id={3}
        titulo="Galon de gas de 15kg"
        descripcion="Cilindro 15 kg"
        precio={14500}
        stock={90}
        imagen="/img/galon_15kg.jpg"
      />
    </MemoryRouter>
  );

  const enlace = screen.getByRole("link", { name: /ver producto/i });

  expect(enlace).toHaveAttribute("href", "/producto/3");
});