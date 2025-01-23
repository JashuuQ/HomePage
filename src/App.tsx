import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
// import Projects from "./Projects";
// import Blog from "./Blog";

function App() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        {/* Main Content */}
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
