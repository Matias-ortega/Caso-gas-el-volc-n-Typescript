// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PanelAdmin from "../organism/PanelAdmin";

it("el botón del formulario admin dice 'Agregar' y es de tipo submit", () => {
  render(<PanelAdmin />);

  const boton = screen.getByRole("button", { name: "Agregar" });

  expect(boton).toBeInTheDocument();
  expect(boton).toHaveTextContent("Agregar");
  expect(boton).toHaveAttribute("type", "submit");
  expect(boton).toBeEnabled();
});
