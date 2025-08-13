import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../navbar/navbar.css';
// Removida a importação da imagem do logo

function Navbar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
      <div className="navbar-logo">
        <h1>PulseHub</h1>
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Evento
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => isActive ? 'active' : ''}>
            Evento
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
            Evento
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            Evento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
