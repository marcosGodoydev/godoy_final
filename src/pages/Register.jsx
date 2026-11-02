import { Link } from 'react-router-dom'

// Formulario de registro: solo maquetado
export default function Register() {
  return (
    <section className="form-wrapper">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h1>Crear cuenta</h1>
        <div className="row">
          <label>
            Nombre
            <input type="text" name="nombre" placeholder="Juan" required />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" placeholder="Pérez" required />
          </label>
        </div>
        <label>
          DNI
          <input type="number" name="dni" placeholder="30123456" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="correo@ejemplo.com" required />
        </label>
        <label>
          Teléfono
          <input type="tel" name="telefono" placeholder="11 1234-5678" />
        </label>
        <label>
          Dirección
          <input type="text" name="direccion" placeholder="Calle 123, Ciudad" />
        </label>
        <div className="row">
          <label>
            Contraseña
            <input type="password" name="password" placeholder="••••••••" required />
          </label>
          <label>
            Repetir contraseña
            <input type="password" name="password2" placeholder="••••••••" required />
          </label>
        </div>
        <label className="checkbox">
          <input type="checkbox" name="terminos" required /> Acepto los términos y condiciones
        </label>
        <button type="submit" className="btn btn-block">Registrarme</button>
        <p className="form-footer">
          ¿Ya tenés cuenta? <Link to="/login">Ingresá</Link>
        </p>
      </form>
    </section>
  )
}
