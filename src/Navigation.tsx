import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import "./Navigation.css";

interface Link {
  to: string;
  label: string;
}

// Using the Array.map to generate navigation links dynamically 
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false); // control the shown state
  const links: Link[] = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
      
      {/* Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Navigation list */}
      <ul className="navigation-list">
        {links.map((link) => (
          <li key={link.to} className="navigation-item">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "navigation-link active" : "navigation-link"
              }
              onClick={() => setMenuOpen(false)} 
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
