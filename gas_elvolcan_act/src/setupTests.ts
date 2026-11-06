import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  localStorage.clear(); // cada prueba empieza con localStorage vacío
});

afterEach(() => {
  cleanup(); // limpia lo dibujado en la prueba anterior
});