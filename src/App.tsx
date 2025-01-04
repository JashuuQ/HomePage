import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
// import Projects from "./Projects";
// import Education from "./Education";
// import Resume from "./Resume";

function App() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        {/* Main Content */}
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/education" element={<Education />} /> */}
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
