import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import Title from "./shared/titles/H2Title";

const AboutDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 35px;
  margin-top: 0;
  color: ${(props) => props.theme.mediumGray};

  &:last-of-type {
    margin-bottom: 6px;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  margin: auto;
  display: block;
`;

function About() {
  return (
    <div>
      <Title>Easy, fast and secure payments</Title>
      <AboutDescription>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </AboutDescription>
      <AboutDescription>Powered by</AboutDescription>
      <LogoImg src={logo} alt="logo" />
    </div>
  );
}

AboutDescription.defaultProps = {
  theme: PropTypes.shape({
    mediumGray: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
