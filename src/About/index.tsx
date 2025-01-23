import React, { useState } from 'react';
import './index.css';

const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/images/profile2.jpg');
  const handleImageClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === '/images/profile2.jpg'
        ? '/images/profile3.jpg'
        : '/images/profile2.jpg'
    );
  };

  return (
    <div className="about-container">
      {/* Left side text */}

      <div className="about-content">
        <h1>About Me</h1>
        <p>
          👋 Hi! I’m Jiashu (Cecilia) Qian, a graduate Computer Science student at Northeastern University.
        </p>
        <p>
          I am proficient in Java, Python, TypeScript and SQL,
          with hands-on experience in full-stack development, API design and distributed systems.
          and web technologies like Node.js, Flask and Django,
          along with cloud tools like AWS, Docker, RabbitMQ, Kubernetes and Jenkins.
        </p>
        <p>
          🚀 I am actively seeking an internship or Co-op role in backend, cloud infrastructure, or full-stack development.
          If you are looking for a dedicated member with your team, plz feel free to connect with me!
        </p>

      </div>

      {/* Right side images */}
      <div className="about-images">
        <div className="image-container" onClick={handleImageClick}>
          <img
            src={imageSrc}
            alt="profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
