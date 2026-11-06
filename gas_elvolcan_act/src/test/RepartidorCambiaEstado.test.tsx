// @vitest-environment jsdom
import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PanelReparto from "../organism/PanelRepartidor";

it("PanelReparto permite al repartidor cambiar el estado a 'entregado'", () => {
  localStorage.setItem(
    "sesion",
    JSON.stringify({ nombre: "Repartidor", email: "reparto@volcan.cl", rol: "repartidor" })
  );
  localStorage.setItem(
    "pedidos",
    JSON.stringify([
      {
        id: 1001, fecha: "hoy", cliente: "Ana", email: "ana@gmail.com", direccion: "Calle 123",
        items: [{ id: 1, titulo: "Galon 5kg", precio: 6000, cantidad: 1 }],
        total: 6000, estado: "asignado", repartidor: "reparto@volcan.cl",
      },
    ])
  );

  render(<PanelReparto />);
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "entregado" } });

  expect(JSON.parse(localStorage.getItem("pedidos") ?? "[]")[0].estado).toBe("entregado");
});