import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
        >
          Jiashu's Home
        </NavLink>
      </div>
      <ul className="navigation-list">
        <li className="navigation-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
          >
            About
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
          >
            Projects
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
          >
            Education
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
