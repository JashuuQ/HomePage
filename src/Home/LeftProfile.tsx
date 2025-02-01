import React, { useState } from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGraduationCap
} from "react-icons/fa";

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
  height: 180px;
  border-radius: 50%;
  margin-bottom: 18px;
  border: 5px solid #fff;
  box-shadow: 0 0 0 1px #ddd;
  object-fit: cover;
`;

const NameTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 20px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.6;
`;

/**
 * InfoItem:
 * - Each row: icon + label link
 */
const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #444;
  margin: 10px 0;
`;


const IconWrapper = styled.span`
  margin-right: 10px;
  font-size: 1.1rem; 
  color: #777;
`;

/**
 * RowContent:
 * - This ensures the text is truly centered with the icon
 */
const RowContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2px;
`;

/**
 * TooltipWrapper:
 * - keep the tooltip trigger in the same flex row so it doesn't shift
 */
const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex; 
  align-items: center;
  cursor: pointer;
`;

/**
 * Tooltip:
 * - Appears below the trigger
 */
const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 12px;
  margin-top: 6px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const CopyButton = styled.button`
  display: inline-block;
  margin-top: 5px;
  padding: 4px 8px;
  font-size: 0.9rem;
  border: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #ddd;
  }
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LeftProfile: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("iqjs0124@gmail.com");
    alert("Email address copied to clipboard!");
  };

  return (
    <LeftContainer>
      <ProfileImage src="/images/profile1.jpg" alt="Profile1" />
      <NameTitle>Jiashu Qian</NameTitle>
      <InfoText>
        CS Master @ Northeastern,
        <br/>
        B.S. @ ZJU
      </InfoText>

      <InfoList>
        {/* LOCATION */}
        <InfoItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <RowContent>Boston, MA</RowContent>
        </InfoItem>

        {/* EMAIL (with tooltip) */}
        <InfoItem>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <RowContent>
            <TooltipWrapper
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Email
              {showTooltip && (
                <Tooltip>
                  <p style={{ margin: 0 }}>iqjs0124@gmail.com</p>
                  <CopyButton onClick={handleCopy}>Copy</CopyButton>
                </Tooltip>
              )}
            </TooltipWrapper>
          </RowContent>
        </InfoItem>

        {/* LINKEDIN */}
        <InfoItem>
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <RowContent>
            <ExternalLink
              href="https://www.linkedin.com/in/jiashu-cecilia-qian-551b70284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ExternalLink>
          </RowContent>
        </InfoItem>

        {/* GITHUB */}
        <InfoItem>
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          <RowContent>
            <ExternalLink
              href="https://github.com/JashuuQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ExternalLink>
          </RowContent>
        </InfoItem>

        {/* GOOGLE SCHOLAR */}
        <InfoItem>
          <IconWrapper>
            <FaGraduationCap />
          </IconWrapper>
          <RowContent>
            <ExternalLink
              href="https://scholar.google.com/citations?user=JMiqOEIAAAAJ&hl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </ExternalLink>
          </RowContent>
        </InfoItem>
      </InfoList>
    </LeftContainer>
  );
};

export default LeftProfile;
