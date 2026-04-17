import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";

interface Link {
  to: string;
  label: string;
}

// Using the Array.map to generate navigation links dynamically 
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links: Link[] = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navigation ${menuOpen ? "open" : ""}`}>
      <div className="navigation-home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
          onClick={closeMenu}
        >
          Jiashu's Home
        </NavLink>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navigation-list"
        type="button"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul id="navigation-list" className="navigation-list">
        {links.map((link) => (
          <li key={link.to} className="navigation-item">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "navigation-link active" : "navigation-link"
              }
              onClick={closeMenu}
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
