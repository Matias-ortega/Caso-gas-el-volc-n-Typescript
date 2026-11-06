import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CampoFormularios from "../molecule/CampoFormularios";
import BotonFormulario from "../atoms/BotonFormulario";
import { cargarUsuarios } from "./FormularioRegistro";



function FormularioInicioSesion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const correo = email.trim().toLowerCase();

    if (correo.trim()=="") {
      alert("ingrese el correo");
      return;
    }
      if (password.trim()=="") {
      alert("ingrese el correo");
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
      alert("Ingresa un correo válido");
      return;
    }

    const usuarios = cargarUsuarios();
    const usuario = usuarios.find((u) => u.email === correo && u.password === password);

    if (!usuario) {
      alert("Correo o contraseña incorrectos");
      return;
    }

  
    const { password: _omit, ...sesion } = usuario;
    localStorage.setItem("sesion", JSON.stringify(sesion));

    if (usuario.rol === "admin") navigate("/admin");
    else if (usuario.rol === "repartidor") navigate("/reparto");
    else if (usuario.rol === "operador") navigate("/operador");
    else navigate("/inicio");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <CampoFormularios etiqueta="Correo" tipo="email" nombre="email" valor={email} alCambiar={setEmail} />
      <CampoFormularios etiqueta="Contraseña" tipo="password" nombre="password" valor={password} alCambiar={setPassword} />

      <BotonFormulario texto="Entrar" />

      <p className="text-center mt-3">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </form>
  );
}

export default FormularioInicioSesion;