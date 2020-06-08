import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H2TitleWrapper = styled.h2`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${(props) => props.theme.darkGray};
  margin-top: 0;
  margin-bottom: 20px;
`;

function H2Title({ children }) {
  return <H2TitleWrapper>{children}</H2TitleWrapper>;
}

H2Title.propTypes = {
  children: PropTypes.string.isRequired,
};

H2TitleWrapper.defaultProps = {
  theme: PropTypes.shape({
    darkGray: PropTypes.string.isRequired,
  }).isRequired,
};

export default H2Title;
