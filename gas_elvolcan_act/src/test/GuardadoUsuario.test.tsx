import { it, expect } from "vitest";
import { cargarUsuarios } from "../organism/FormularioRegistro";

it("cargarUsuarios conserva a los clientes ya registrados", () => {
  const cliente = { nombre: "Ana", email: "ana@gmail.com", password: "abc123", rol: "cliente" };
  localStorage.setItem("usuarios", JSON.stringify([cliente]));

  const usuarios = cargarUsuarios();

  expect(usuarios).toHaveLength(4);
  expect(usuarios.some((u) => u.email === "ana@gmail.com")).toBe(true);
});