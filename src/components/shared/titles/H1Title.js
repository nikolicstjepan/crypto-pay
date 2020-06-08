import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H1TitleWrapper = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  color: ${(props) => props.theme.darkGray};
  margin-top: 0;
  margin-bottom: 10px;
`;

function H1Title({ children }) {
  return <H1TitleWrapper>{children}</H1TitleWrapper>;
}

H1Title.propTypes = {
  theme: PropTypes.shape({
    darkGray: PropTypes.string.isRequired,
  }),
};

export default H1Title;
