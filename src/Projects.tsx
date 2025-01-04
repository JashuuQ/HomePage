import React from "react";

// Project Interface
interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Project 1",
    description: "Description of project 1",
    link: "https://github.com/yourusername/project1",
  },
  {
    name: "Project 2",
    description: "Description of project 2",
    link: "https://github.com/yourusername/project2",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {/* Automatically generate the projects list */}
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            : {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
