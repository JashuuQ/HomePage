import React, { useState } from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LeftContainer = styled.div`
  flex: 0 0 360px;
  background: linear-gradient(180deg, #f6f5f1 0%, #efede8 100%);
  padding: 56px 36px 40px;
  border-right: 1px solid var(--border-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex: none;
    padding: 36px 24px 28px;
    border-right: none;
    border-bottom: 1px solid var(--border-soft);
  }
`;

const ProfileImage = styled.img`
  width: 196px;
  height: 196px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 5px solid #fff;
  box-shadow: 0 0 0 1px var(--border-soft);
  object-fit: cover;

  @media (max-width: 960px) {
    width: 160px;
    height: 160px;
  }
`;

const NameTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-strong);
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: var(--text-body);
  line-height: 1.6;
  text-align: center;
  margin: 0 0 26px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 280px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 2px;
  font-size: 0.98rem;
  color: var(--text-body);
  margin: 8px 0;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  font-size: 1rem;
  color: var(--text-body);
  background: rgba(255, 255, 255, 0.78);
`;

const RowContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  min-width: 0;
`;

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 190px;
  padding: 10px 12px;
  margin-top: 8px;
  border-radius: 12px;
  border: 1px solid var(--border-strong);
  background-color: var(--surface);
  box-shadow: var(--shadow-soft);
  z-index: 999;
`;

const CopyButton = styled.button`
  display: inline-block;
  margin-top: 8px;
  padding: 8px 12px;
  font-size: 0.88rem;
  border: none;
  background-color: #efede8;
  color: var(--text-strong);
  cursor: pointer;
  border-radius: 999px;

  &:hover {
    background-color: #e1ddd6;
  }
`;

const ExternalLink = styled.a`
  color: var(--text-strong);
  text-decoration: none;
  font-weight: 500;
  overflow-wrap: anywhere;

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
      <ProfileImage src="/images/profile1.jpg" alt="Jiashu Qian" />
      <NameTitle>Jiashu Qian</NameTitle>
      <InfoText>
        CS Master @ Northeastern,
        <br />
        B.S. @ ZJU
      </InfoText>

      <InfoList>
        <InfoItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <RowContent>Seattle, WA</RowContent>
        </InfoItem>

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
