import "./index.css";

interface ProjectCardProps {
  title: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, tags, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View More ↗
        </a>
      </div>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
