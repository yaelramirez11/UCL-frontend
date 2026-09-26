import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partidos"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Partidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
