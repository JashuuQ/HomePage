import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
  font-size: 14px;
  color: #555;

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
