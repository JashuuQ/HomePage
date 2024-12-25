import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import About from "./About";
// import Projects from "./Projects";
// import Publications from "./Publications";
// import Contact from "./Contact";


function App() {
  return (
    <HashRouter>
        <div>
          {/* Navigation */}
          <header style={{ padding: "20px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
            <nav>
              <ul style={{ display: "flex", justifyContent: "space-around", listStyleType: "none", margin: 0, padding: 0 }}>
                <li><a href="#/about">About Me</a></li>
                <li><a href="#/projects">Projects</a></li>
                <li><a href="#/publications">Publications</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </nav>
          </header>

          {/* Rooter */}
          <main style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
        </div>
    </HashRouter>
  );
}

export default App;
