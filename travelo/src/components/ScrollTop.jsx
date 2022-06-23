import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function ScrollTop() {
  const [scrollState, setScrollState] = useState(
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setScrollState(true) : setScrollState(false);
    })
  );

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <ToTop scrollState={scrollState} onClick={toTop}>
        <img src={logo} alt="scroll_to_top" />
      </ToTop>
    </>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 2;
  cursor: pointer;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;
`;
