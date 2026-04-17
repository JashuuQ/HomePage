import React from "react";
import styled from "styled-components";

import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const Section = styled.section`
  padding: clamp(18px, 3vw, 36px);
`;

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 96px);
  max-width: 1280px;
  margin: 0 auto;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-card);
  font-family: "Helvetica Neue", Arial, sans-serif;

  @media (max-width: 960px) {
    flex-direction: column;
    min-height: auto;
    border-radius: 22px;
  }
`;

const Home: React.FC = () => {
  return (
    <Section>
      <Container>
        <LeftProfile />
        <RightProfile />
      </Container>
    </Section>
  );
};

export default Home;
