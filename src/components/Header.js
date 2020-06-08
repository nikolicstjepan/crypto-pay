import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Title from "./shared/titles/H1Title";
import NavigationContainer from "./NavigationContainer";

const HeaderDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 0px;
  color: ${(props) => props.theme.mediumGray2};
  margin-bottom: 20px;
`;

function Header() {
  return (
    <header>
      <Title>Pay with Crypto</Title>
      <HeaderDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </HeaderDescription>
      <NavigationContainer />
    </header>
  );
}

HeaderDescription.defaultProps = {
  theme: PropTypes.shape({
    mediumGray2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
