import React from "react";
import styled from "styled-components";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGraduationCap
} from "react-icons/fa";

// Left container with background & layout
const LeftContainer = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 40px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  border-radius: 50%;
  margin-bottom: 18px;
  border: 5px solid #fff; /* white border*/
  box-shadow: 0 0 0 1px #ddd; /* subtle shadow line */
`;

const NameTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
  text-align: center;  /* multiple lines - center */
  margin-bottom: 20px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.8;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #444;
  margin: 10px 0;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  font-size: 1.1rem;
  color: #666;
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
      <NameTitle>Jiashu Qian</NameTitle>

      <InfoText>
        CS Master @ Northeastern, B.S. @ ZJU
      </InfoText>

      <InfoList>
        <InfoItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          Boston, MA
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <ExternalLink
            href="mailto:iqjs0124@gmail.com"
            rel="noopener noreferrer"
          >
            Email
          </ExternalLink>
          <span style={{ marginLeft: "8px", color: "#555" }}>
            (iqjs0124@gmail.com)
          </span>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <ExternalLink
            href="https://www.linkedin.com/in/jiashu-cecilia-qian-551b70284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ExternalLink>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          <ExternalLink
            href="https://github.com/JashuuQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ExternalLink>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaGraduationCap />
          </IconWrapper>
          <ExternalLink
            href="https://scholar.google.com/citations?user=JMiqOEIAAAAJ&hl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </ExternalLink>
        </InfoItem>
      </InfoList>

      {/* <InfoList>
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
      </InfoList> */}
    </LeftContainer>
  );
};

export default LeftProfile;
