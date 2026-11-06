// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormularioInicioSesion from "../organism/FormularioInicioSesion";
it("el botón del login dice 'Entrar'", () => {
  render(
    <MemoryRouter>
      <FormularioInicioSesion />
    </MemoryRouter>
  );
  expect(screen.getByRole("button", { name: "Entrar" })).toHaveAttribute("type", "submit");
});