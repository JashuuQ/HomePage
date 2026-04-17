import React, { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const RightContainer = styled.div`
  flex: 1 1 auto;
  background: linear-gradient(135deg, #212121 0%, #141414 62%, #0d0d0d 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(48px, 8vw, 108px) clamp(24px, 5vw, 72px);
  text-align: left;

  @media (max-width: 960px) {
    padding: 36px 24px 42px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.3rem, 1.7rem + 2.6vw, 4.4rem);
  margin: 0 0 28px;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.98;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.45rem, 1.15rem + 1vw, 2.1rem);
  margin: 0 0 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
`;

const TypewriterText = styled.h3`
  min-height: 2.2em;
  font-size: clamp(1.05rem, 0.95rem + 0.7vw, 1.35rem);
  font-weight: 400;
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.9);
`;

const Description = styled.p`
  margin: 0 0 34px;
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
  font-weight: 400;
  line-height: 1.6;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.78);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const PrimaryButton = styled.button`
  padding: 12px 22px;
  min-height: 48px;
  font-size: 0.98rem;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &:hover {
    background-color: #ddd;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  padding: 12px 22px;
  min-height: 48px;
  font-size: 0.98rem;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 999px;
  font-weight: 600;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-1px);
  }
`;

const EmailDisplay = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  padding: 12px 16px;
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.83);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow-wrap: anywhere;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
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
        Always learning, always building. One step at a time. :)
      </Description>

      <ButtonGroup>
        <PrimaryButton onClick={handleReadMore}>Read More</PrimaryButton>
        <SecondaryButton onClick={handleContactMe}>Contact Me</SecondaryButton>
      </ButtonGroup>

      {showEmail && (
        <EmailDisplay>
          <FaEnvelope size={15} />
          <span>iqjs0124@gmail.com</span>
        </EmailDisplay>
      )}
    </RightContainer>
  );
};

export default RightProfile;
