import { NavLink } from "react-router-dom";
import "./Navigation.css";

interface Link {
  to: string;
  label: string;
}

// Using the Array.map method to generate navigation links dynamically 
function Navigation() {
  const links: Link[] = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <nav className="navigation">
      {/* Home */}
      <div className="navigation-home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          Jiashu's Home
        </NavLink>
      </div>
      {/* Navigation list */}
      <ul className="navigation-list">
        {links.map((link) => (
          <li key={link.to} className="navigation-item">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "navigation-link active" : "navigation-link"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default Navigation;
