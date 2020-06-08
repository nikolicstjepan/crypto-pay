// Taken from https://projects.lukehaas.me/css-loaders/

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderBody = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${(props) => props.theme.lightBlue};
  border-right: 1.1em solid ${(props) => props.theme.lightBlue};
  border-bottom: 1.1em solid ${(props) => props.theme.lightBlue};
  border-left: 1.1em solid transparent;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <LoaderWrapper>
      <LoaderBody />
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

LoaderBody.defaultProps = {
  theme: PropTypes.shape({
    lightBlue: PropTypes.string.isRequired,
  }).isRequired,
};

export default Loader;
