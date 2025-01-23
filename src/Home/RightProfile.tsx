import React, { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const RightContainer = styled.div`
  flex: 3;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 120px 60px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 65px;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
`;

const TypewriterText = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
`;

const Description = styled.p`
  margin-bottom: 70px;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.85); 
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const PrimaryButton = styled.button`
  padding: 11px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
    transform: scale(1.05);
  }
`;

const SecondaryButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 6px;
  font-weight: 400;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: scale(1.05);
  }
`;

const EmailDisplay = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color:rgba(255, 255, 255, 0.83);
`;

const RightProfile: React.FC = () => {
  const navigate = useNavigate();
  const [showEmail, setShowEmail] = useState(false);

  const handleReadMore = () => {
    navigate("/about");
  };

  const handleContactMe = () => {
    setShowEmail((prev) => !prev);
  };

  return (
    <RightContainer>
      <Title>Hello and welcome!</Title>
      <Subtitle>I'm Jiashu (Cecilia), </Subtitle>

      <TypewriterText>
        <Typewriter
          options={{
            strings: [
              "A CS Master Student",
              "A Passionate Learner",
              "A Self-Driven Innovator",
              "A Full-Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </TypewriterText>

      <Description>
        Pursuing lifelong learning by building my knowledge and skills step by step :)
      </Description>

      <ButtonGroup>
        <PrimaryButton onClick={handleReadMore}>Read More</PrimaryButton>
        <SecondaryButton onClick={handleContactMe}>Contact Me</SecondaryButton>
      </ButtonGroup>

      {showEmail && (
        <EmailDisplay>
          <FaEnvelope size={15} />
          <span> iqjs0124@gmail.com</span>
        </EmailDisplay>
      )}

    </RightContainer>
  );
};

export default RightProfile;
