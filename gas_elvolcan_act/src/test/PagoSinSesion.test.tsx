import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormularioPago from "../organism/FormularioPago";

it("FormularioPago pide iniciar sesión si no hay sesión", () => {
  localStorage.setItem(
    "carrito",
    JSON.stringify([{ id: 1, titulo: "Galon", precio: 6000, cantidad: 1 }])
  );

  render(
    <MemoryRouter>
      <FormularioPago />
    </MemoryRouter>
  );

  expect(screen.getByText("Debes iniciar sesión para pagar")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Iniciar sesión" })).toHaveAttribute("href", "/login");
});