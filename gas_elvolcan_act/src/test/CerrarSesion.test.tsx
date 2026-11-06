import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Barra from "../organism/navbar";

it("'Cerrar sesión' borra la sesión guardada", () => {
  localStorage.setItem(
    "sesion",
    JSON.stringify({ nombre: "Admin", email: "admin@volcan.cl", rol: "admin" })
  );

  render(
    <MemoryRouter>
      <Barra />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Administrar" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Cerrar sesión" }));

  expect(localStorage.getItem("sesion")).toBeNull();
});