import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "EduTrack",
    tags: ["React.js", "React Router", "Redux", "Node.js", "Express.js", "RESTful API", "MongoDB", "Render"],
    link: "https://github.com/JashuuQ/EduTrack/tree/a6",
    imageUrl: "/images/edu_track.png",
  },
  {
    title: "Flight Booking System",
    tags: ["Spring Boot", "Java JDK", "MySQL", "Postman", "Docker", "MongoDB"],
    link: "https://github.com/JashuuQ/airplane_booking_system",
    imageUrl: "/images/airplane_booking_system.jpg",
  },

  {
    title: "HomePage",
    tags: ["React.js", "HTML / CSS", "TypeScript", "Node.js", "Express.js"],
    link: "#",
    imageUrl: "/images/homepage.png",
  },

  {
    title: "MasterMind",
    tags: ["Python", "Flask", "MVC Design", "Git"],
    link: "https://github.com/JashuuQ/MasterMind/tree/main",
    imageUrl: "/images/mastermind.jpg",
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
