import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">TecnoShop</Link>
        <nav className="nav-links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/login">Ingresar</NavLink>
          <NavLink to="/registro" className="btn btn-small">Registrarse</NavLink>
        </nav>
      </div>
    </header>
  )
}
