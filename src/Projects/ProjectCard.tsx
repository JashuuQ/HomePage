import "./index.css";

export interface ProjectCardProps {
  title: string;
  summary: string;
  status: string;
  tags: string[];
  link?: string;
  imageUrl?: string;
  ctaLabel?: string;
  isPlaceholder?: boolean;
}

export default function ProjectCard({
  title,
  summary,
  status,
  tags,
  link,
  imageUrl,
  ctaLabel = "View More ↗",
  isPlaceholder = false,
}: ProjectCardProps) {
  const hasLink = Boolean(link && link !== "#");

  return (
    <article className={`project-card ${isPlaceholder ? "project-card-placeholder" : ""}`}>
      <div className="project-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="project-image" />
        ) : (
          <div className="project-image-fallback">
            <span>{status}</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-header">
          <div>
            <p className="project-status">{status}</p>
            <h2>{title}</h2>
          </div>
          {!hasLink || isPlaceholder ? (
            <span className="project-cta project-cta-disabled">{ctaLabel}</span>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-cta">
              {ctaLabel}
            </a>
          )}
        </div>
        <p className="project-summary">{summary}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
