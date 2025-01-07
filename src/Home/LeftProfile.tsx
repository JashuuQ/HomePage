import React from "react";
import styled from "styled-components";

const LeftContainer = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const NameTitle = styled.h3`
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  margin-bottom: 15px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.8;
`;

const InfoListItem = styled.li`
  margin-bottom: 6px;
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LeftProfile: React.FC = () => {
  return (
    <LeftContainer>
      <ProfileImage src="/images/profile.jpg" alt="Profile" />
      <NameTitle>Jiashu(Cecilia) Qian</NameTitle>
      <InfoText>A Passionate Developer and Researcher</InfoText>
      
      <InfoList>
        <InfoListItem>Location: Boston, MA, USA</InfoListItem>
        <InfoListItem>Email: iqjs0124@gmail.com</InfoListItem>
        <InfoListItem>
          <ExternalLink 
            href="https://github.com/JashuuQ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </ExternalLink>
        </InfoListItem>
        <InfoListItem>
          <ExternalLink 
            href="https://www.linkedin.com/in/jiashu-cecilia-qian-551b70284/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </ExternalLink>
        </InfoListItem>
      </InfoList>
    </LeftContainer>
  );
};

export default LeftProfile;
