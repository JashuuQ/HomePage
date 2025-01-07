import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const RightContainer = styled.div`
  flex: 3;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TypewriterText = styled.h3`
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

const PrimaryButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;

const SecondaryButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  font-weight: bold;
`;

const RightProfile: React.FC = () => {
  return (
    <RightContainer>
      <Title>Hi, I'm Jiashu!</Title>
      <TypewriterText>
        <Typewriter
          options={{
            strings: [
              "A Data Engineer",
              "Self-Driven",
              "Quick Starter",
              "Continuous Learner",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </TypewriterText>
      <Description>
        Just moving step-by-step forward to enhance my skills and knowledge.
      </Description>
      <ButtonGroup>
        <PrimaryButton>Read More</PrimaryButton>
        <SecondaryButton>Contact Me</SecondaryButton>
      </ButtonGroup>
    </RightContainer>
  );
};

export default RightProfile;
