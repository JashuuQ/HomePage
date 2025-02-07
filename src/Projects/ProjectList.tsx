import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "111",
    tags: ["Spring Boot", "Postman", "Docker", "Java", "Kubernetes"],
    link: "#",
  },
  {
    title: "222",
    tags: ["AWS", "Node.js", "Docker", "Redis", "Reverse Proxy"],
    link: "#",
  },
  {
    title: "333",
    tags: ["TypeScript", "React.js", "Tailwind CSS", "Next.js", "GitHub"],
    link: "#",
  },
];

export default function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
