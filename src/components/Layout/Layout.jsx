import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
