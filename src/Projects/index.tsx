import "./index.css";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="projects-container">
      <div className="projects-wrapper">
        <p className="projects-eyebrow">Selected Work</p>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          A mix of shipped coursework, hackathon prototypes, and some recent projects. 
          <br />
          Details and source code live on{" "}
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
    </section>
  );
}
