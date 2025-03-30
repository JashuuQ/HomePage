import React from "react";
import styled from "styled-components";

import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

// Use styled.div to define a component called Container
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Helvetica Neue", Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <LeftProfile />
      <RightProfile />
    </Container>
  );
};

export default Home;
