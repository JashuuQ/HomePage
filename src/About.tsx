import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hello! I am Jiashu, a passionate developer and researcher.</p>
      <img src="/images/profile.jpg" alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
      <ul>
        <li>Location: Boston, MA, USA</li>
        <li>Email: iqjs0124@gmail.com</li>
        <li><a href="https://github.com/JashuuQ">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/jiashu-cecilia-qian-551b70284/">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default About;
