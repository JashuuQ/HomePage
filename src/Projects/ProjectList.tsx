import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Time Capsule",
    summary:
      "A social Android app for creating digital time capsules with text, images, and videos that stay locked until a future date, then unlock with notifications and optional friend sharing.",
    status: "Android App",
    tags: [
      "Java",
      "Android",
      "MVVM",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "FCM",
      "Cloud Functions",
      "Material Design 3",
      "Google Location",
    ],
    link: "https://github.com/JashuuQ/Time-Capsule-App",
    imageUrl: "/images/time_capsule.png",
    ctaLabel: "Source Code ↗",
  },
  {
    title: "DebateAI",
    summary:
      "An interactive debating platform that combines real-time speech capture, AI feedback, and immersive web presentation for hackathon-scale prototyping.",
    status: "Featured Project",
    tags: [
      "React.js",
      "Redux",
      "Python",
      "FastAPI",
      "Web Audio API",
      "WebGL",
      "WebSocket",
      "AI Integration",
      "Speech Processing",
    ],
    link: "https://github.com/liuxuanzhang718/Hackathon_DebateAI",
    imageUrl: "/images/debate_ai.png",
    ctaLabel: "Source Code ↗",
  },
  {
    title: "EduTrack",
    summary:
      "A learning management workflow app covering progress tracking, course organization, and deployable full-stack CRUD flows.",
    status: "Full-Stack Build",
    tags: [
      "React.js",
      "React Router",
      "Redux",
      "Node.js",
      "Express.js",
      "RESTful API",
      "MongoDB",
      "Render",
    ],
    link: "https://github.com/JashuuQ/EduTrack/tree/a6",
    imageUrl: "/images/edu_track.png",
    ctaLabel: "View Project ↗",
  },
  {
    title: "Flight Booking System",
    summary:
      "A service-oriented booking backend with persistent storage, API testing, and containerized local development for airline workflows.",
    status: "Backend System",
    tags: ["Spring Boot", "Java JDK", "MySQL", "Postman", "Docker", "MongoDB"],
    link: "https://github.com/JashuuQ/airplane_booking_system",
    imageUrl: "/images/airplane_booking_system.jpg",
    ctaLabel: "Repository ↗",
  },
  {
    title: "HomePage",
    summary:
      "This personal site built with React and TypeScript, focused on presenting profile, experience, and project work in a clean single-page portfolio.",
    status: "Personal Brand",
    tags: ["React.js", "HTML / CSS", "TypeScript", "Node.js", "Express.js"],
    link: "https://github.com/JashuuQ",
    imageUrl: "/images/homepage.png",
    ctaLabel: "Profile ↗",
  },
  {
    title: "MasterMind",
    summary:
      "A Python and Flask implementation of the classic code-breaking game using MVC structure and lightweight full-stack patterns.",
    status: "Game Project",
    tags: ["Python", "Flask", "MVC Design", "Git"],
    link: "https://github.com/JashuuQ/MasterMind/tree/main",
    imageUrl: "/images/mastermind.jpg",
    ctaLabel: "Source Code ↗",
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
