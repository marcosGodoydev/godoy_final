import { Link } from 'react-router-dom'

// Formulario de login: solo maquetado
export default function Login() {
  return (
    <section className="form-wrapper">
      <form className="form narrow" onSubmit={(e) => e.preventDefault()}>
        <h1>Iniciar sesión</h1>
        <label>
          Email
          <input type="email" name="email" placeholder="correo@ejemplo.com" required />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" placeholder="••••••••" required />
        </label>
        <button type="submit" className="btn btn-block">Ingresar</button>
        <p className="form-footer">
          ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
        </p>
      </form>
    </section>
  )
}
