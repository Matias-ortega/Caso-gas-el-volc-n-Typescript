import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CampoFormularios from "../molecule/CampoFormularios";
import BotonFormulario from "../atoms/BotonFormulario";

export type Rol = "admin" | "cliente" | "repartidor" | "operador";

export interface Usuario {
  nombre: string;
  email: string;
  password: string;
  rol: Rol;
}
export const usuariosIniciales: Usuario[] = [
  { nombre: "Admin", email: "admin@volcan.cl", password: "admin123", rol: "admin" },
  { nombre: "Repartidor", email: "reparto@volcan.cl", password: "reparto123", rol: "repartidor" },
  { nombre: "Operador", email: "operador@volcan.cl", password: "operador123", rol: "operador" },
];


export function cargarUsuarios(): Usuario[] {
  const guardados: Usuario[] = JSON.parse(localStorage.getItem("usuarios") ?? "[]");

  const faltantes = usuariosIniciales.filter(
    (ini) => !guardados.some((u) => u.email === ini.email)
  );

  if (faltantes.length > 0) {
    const todos = [...guardados, ...faltantes];
    localStorage.setItem("usuarios", JSON.stringify(todos));
    return todos;
  }

  return guardados;
}



function FormularioRegistro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  

    const correo = email.trim().toLowerCase();

    if (nombre.trim()==="" ) {
      alert("Ingrese el nombre");
      return;
    }
    if (email.trim()==="" ) {
      alert("Ingrese el gmail");
      return;
    }
    if (password.trim()==="" ) {
      alert("Ingrese el contraseña");
      return;
    }
    if (confirmar.trim()==="" ) {
      alert("confirme la contraseña");
      return;
    }

    if (nombre.trim().length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
      alert("Ingresa un correo válido");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const usuarios = cargarUsuarios();

    if (usuarios.some((u) => u.email === correo)) {
      alert("Ya existe una cuenta con ese correo");
      return;
    }

    const nuevo: Usuario = { nombre: nombre.trim(), email: correo, password, rol: "cliente" };
    localStorage.setItem("usuarios", JSON.stringify([...usuarios, nuevo]));

    alert("Cuenta creada. Ahora inicia sesión.");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <CampoFormularios etiqueta="Nombre" tipo="text" nombre="nombre" valor={nombre} alCambiar={setNombre} />
      <CampoFormularios etiqueta="Correo" tipo="email" nombre="email" valor={email} alCambiar={setEmail} />
      <CampoFormularios etiqueta="Contraseña" tipo="password" nombre="password" valor={password} alCambiar={setPassword} />
      <CampoFormularios etiqueta="Confirmar contraseña" tipo="password" nombre="confirmar" valor={confirmar} alCambiar={setConfirmar} />

      <BotonFormulario texto="Registrarme" />

      <p className="text-center mt-3">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </form>
  );
}

export default FormularioRegistro;