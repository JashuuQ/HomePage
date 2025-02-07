import "./index.css";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <main className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          Details and source code:{" "}
          <a
            href="https://github.com/JashuuQ"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/JashuuQ
          </a>
        </p>
        <ProjectList />
      </div>
    </main>
  );
}
