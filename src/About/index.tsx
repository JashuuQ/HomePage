import React, { useState } from 'react';
import './index.css';


const Underline = ({ children }: { children: React.ReactNode }) => (
  <span style={{ textDecoration: "underline" }}>{children}</span>
);

const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/images/profile2.jpg');

  const handleImageClick = () => {
    setImageSrc(prevSrc =>
      prevSrc === '/images/profile2.jpg' ? '/images/profile3.jpg' : '/images/profile2.jpg'
    );
  };

  return (
    <div className="about-container">
      {/* Main Body：Left info & Right Img */}
      <div className="about-main">
        <div className="about-info">
          <h1>About Me</h1>
          <p>
            👋 Hi! I'm Jiashu (Cecilia) Qian, a graduate Computer Science student at Northeastern University.
            I am proficient in Java/Python, TypeScript, and Kafka, paired with hands-on experience in:
          </p>

          <ul className="expertise-list">
            <li>
              <strong>Full-Stack:</strong> Built online learning platform with{" "}
              <Underline>React</Underline>, <Underline>Spring Boot</Underline>, and <Underline>Docker</Underline>.
            </li>
            <li>
              <strong>Distributed Systems:</strong> Developed a high-concurrency flash sale system with{" "}
              <Underline>Redis</Underline> caching, <Underline>distributed transactions</Underline>, and a{" "}
              <Underline>Circuit Breaker pattern</Underline>.
            </li>
            <li>
              <strong>Machine Learning:</strong> Improved the AUC by 93.86% on TENCENT/CIKM dataset through Dynamic Graph Neural Network research
              (published at <Underline>ICWS 2023</Underline>).
            </li>
          </ul>

          <p>
            🚀 I am actively seeking <strong>Internship/Co-op</strong> opportunities in
            <strong> full-stack development</strong>, <strong>cloud infrastructure</strong> and <strong>machine learning</strong>, .
            If you are looking for a dedicated team member, feel free to connect with me!
          </p>

          <div className="resume-link">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              📄 View My Resume
            </a>
          </div>

        </div>


        <div className="about-images">
          <div className="image-container" onClick={handleImageClick} role="button" tabIndex={0}>
            <img src={imageSrc} alt="Profile" className="profile-image" />
          </div>
        </div>



      </div>



      {/* Details Section */}
      <div className="details-section">
        <div className="detail-card">
          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
              <p>
                <strong>Programming:</strong> Java, Python, JavaScript/TypeScript, C, MATLAB, SQL, HTML/CSS
              </p>
              <p>
                <strong>Frameworks:</strong> Spring Boot, Spring Cloud, Django, Flask, React, Vue.js, Express.js, Node.js, Next.js
              </p>
              <p>
                <strong>Technologies: </strong> 
                Kafka, RabbitMQ, Redis, 
                API Gateway, Eureka,
                Docker, Kubernetes,
                Jenkins, Prometheus, Grafana,
                PostgreSQL, MongoDB, MySQL, Redis, AWS, GCP,
                Git
              </p>
            </div>
          </section>
        </div>

        <div className="detail-card">
          <section className="experience">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Software Development Engineer Intern</h3>
              <p>JD.com (CN) | 09/2022 – 11/2022</p>
            </div>
          </section>
        </div>

        <div className="detail-card">
          <section className="education">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Master of Science in Computer Science</h3>
              <p>Northeastern University (US) | 09/2023 – Present</p>
            </div>
            <div className="education-item">
              <h3>Bachelor of Science in Resource Science and Environment</h3>
              <p>Zhejiang University (CN) | 09/2018 – 06/2022</p>
            </div>
          </section>
        </div>

        <div className="detail-card">
          <section className="leadership">
            <h2>Leadership & Teamwork</h2>
            <div className="leadership-item">
              <h3>Director, School Law Society (2021 – 2022)</h3>
              <p>
                Directed the planning and execution of the 32nd Mock Court event as the overall organizational leader.
              </p>
            </div>
            <div className="leadership-item">
              <h3>Lead, Publicity Department, Student Union (2018 – 2019)</h3>
              <p>
                Organized a school-wide spring photography event with 300 participants, garnering local newspaper coverage.
              </p>
            </div>
          </section>
        </div>

        <div className="detail-card">
          <section className="hobbies">
            <h2>Hobbies</h2>
            <p>
              Hiking, Bouldering, Photography, Reading.
              And exploring new technologies :)
            </p>
          </section>
        </div>
      </div>


    </div>
  );
};

export default About;