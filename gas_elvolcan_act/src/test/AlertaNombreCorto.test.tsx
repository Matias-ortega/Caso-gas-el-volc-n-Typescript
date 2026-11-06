// @vitest-environment jsdom
import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormularioRegistro from "../organism/FormularioRegistro";

it("Registro avisa con alert si el nombre tiene menos de 3 caracteres", () => {
  const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
  const { container } = render(
    <MemoryRouter>
      <FormularioRegistro />
    </MemoryRouter>
  );
  const campo = (n: string) => container.querySelector(`input[name="${n}"]`) as HTMLInputElement;

  fireEvent.change(campo("nombre"), { target: { value: "Al" } });
  fireEvent.change(campo("email"), { target: { value: "al@gmail.com" } });
  fireEvent.change(campo("password"), { target: { value: "abc123" } });
  fireEvent.change(campo("confirmar"), { target: { value: "abc123" } });
  fireEvent.click(screen.getByRole("button", { name: "Registrarme" }));

  expect(alerta).toHaveBeenCalledWith("El nombre debe tener al menos 3 caracteres");
});