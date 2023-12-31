import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CategorySideBar from "./CategorySideBar";

const Wrapper = styled.div`
  width: 100%;
  z-index: 99;
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <CategorySideBar />
    </Wrapper>
  );
};

export default Header;
