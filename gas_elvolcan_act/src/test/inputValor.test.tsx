import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../atoms/Input";

it("Input muestra el valor que recibe", () => {
  render(<Input tipo="text" nombre="nombre" valor="pepe" alCambiar={() => {}} />);
  expect(screen.getByDisplayValue("pepe")).toBeInTheDocument();
});