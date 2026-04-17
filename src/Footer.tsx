import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 6px;
  padding: 18px 16px 26px;
  text-align: center;
  background-color: transparent;
  font-size: 14px;
  color: var(--text-soft);

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} <strong>Jiashu Qian</strong>. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
