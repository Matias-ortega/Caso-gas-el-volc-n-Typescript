// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Admin from "../page/admin";

it("la página Admin bloquea el acceso si el rol no es admin", () => {
  localStorage.setItem(
    "sesion",
    JSON.stringify({ nombre: "pepe", email: "elpepe@gmail.com", rol: "cliente" })
  );

  render(<Admin />);

  expect(screen.getByText("No tienes permiso para ver esta página")).toBeInTheDocument();
  expect(screen.queryByText("ADMINISTRAR PRODUCTOS")).not.toBeInTheDocument();
});