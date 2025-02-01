import React, { useState } from 'react';
import './index.css';

const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/images/profile2.jpg');

  const handleImageClick = () => {
    setImageSrc(prevSrc =>
      prevSrc === '/images/profile2.jpg' ? '/images/profile3.jpg' : '/images/profile2.jpg'
    );
  };

  return (
    <div className="about-container">
      {/* Left Side - Text Content */}
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          👋 Hi! I’m Jiashu (Cecilia) Qian, a graduate Computer Science student at
          Northeastern University. I am proficient in Java/Python, TypeScript, and MySQL,
          with hands-on experience in full-stack development, machine learning, and data-driven engineering.
        </p>
        <ul className="expertise-list">
          <li>
            <strong>Full-Stack:</strong> Built a scalable online learning platform using <strong>React, Spring Boot, and Docker</strong>,
            enhancing user experience through API and database optimization.
          </li>
          <li>
            <strong>Machine Learning:</strong> Pioneered research on dynamic graph neural networks (<strong>DGNNs</strong>),
            achieving a 93.86% AUC improvement on the TENCENT/CIKM dataset and publishing findings at <strong>ICWS2023</strong>.
          </li>
          <li>
            <strong>Data-Driven:</strong> Improved advertising efficiency at JD.com by leveraging <strong>SQL</strong> and <strong>Kafka</strong> for analytics
            and designing strategic dashboards.
          </li>
        </ul>
        <p>
          🚀 I am actively seeking an <strong>internship</strong> or <strong>Co-op</strong> role in full-stack,
          machine learning, or data-driven development. If you are looking for a dedicated team member, feel free to connect with me!
        </p>
      </div>

      {/* Right Side - Profile Image */}
      <div className="about-images">
        <div className="image-container" onClick={handleImageClick} role="button" tabIndex={0}>
          <img src={imageSrc} alt="Profile" className="profile-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Programming:</strong> Java, Python, JavaScript/TypeScript, C, MATLAB, SQL, HTML/CSS</li>
          <li><strong>Frameworks:</strong> Spring Boot, Spring Cloud, Django, Flask, React, Vue.js, Express.js, Node.js, Next.js</li>
          <li><strong>Technologies:</strong>
            Kafka, RabbitMQ, API Gateway, WebSocket, Eureka, Ribbon, Docker, Kubernetes,
            Git, JUnit, Jenkins, Prometheus, Grafana,
            PostgreSQL, MongoDB, MySQL, Redis,
            AWS (S3, ECS, ECR, EC2, EKS, RDS), Google Cloud Platform
            </li>
        </ul>

        <h2>Education</h2>
        <section className="education-item">
          <h3>Master of Science in Computer Science</h3>
          <p>Northeastern University (US)</p>
          <p>09/2023 – Present</p>
        </section>

        <section className="education-item">
          <h3>Bachelor of Science in Resource Science and Environment</h3>
          <p>Zhejiang University (CN)</p>
          <p>09/2018 – 06/2022</p>
        </section>

        <h2>Experience</h2>
        <section className="experience-item">
          <h3>Software Development Engineer Intern</h3>
          <p>JD.com (CN) | 09/2022 – 11/2022</p>
        </section>

        <h2>Others About Me</h2>


      </div>
    </div>
  );
};

export default About;