// @vitest-environment jsdom
import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormularioRegistro from "../organism/FormularioRegistro";

it("Registro avisa con alert si el correo es inválido", () => {
  const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
  const { container } = render(
    <MemoryRouter>
      <FormularioRegistro />
    </MemoryRouter>
  );
  const campo = (n: string) => container.querySelector(`input[name="${n}"]`) as HTMLInputElement;

  fireEvent.change(campo("nombre"), { target: { value: "elpepe" } });
  fireEvent.change(campo("email"), { target: { value: "pepe@gmail" } });
  fireEvent.change(campo("password"), { target: { value: "pepe67" } });
  fireEvent.change(campo("confirmar"), { target: { value: "pepe67" } });
  fireEvent.click(screen.getByRole("button", { name: "Registrarme" }));

  expect(alerta).toHaveBeenCalledWith(expect.stringContaining("correo válido"));
});