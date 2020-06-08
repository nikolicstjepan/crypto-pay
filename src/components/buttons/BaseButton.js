import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  text-align: ${(props) => (props.align ? props.align : "right")};
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background: radial-gradient(
    100% 100% at 49.7% 100%,
    ${(props) => props.theme.lightBlue} 0%,
    ${(props) => props.theme.lightBlue} 100%
  );
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  text-align: center;
  min-width: 140px;
  border: none;
  cursor: pointer;

  &:focus {
    outline-color: ${(props) => props.theme.lightBlue};
    outline-style: inset;
  }
`;

const Icon = styled.span`
  background: url(${(props) => props.icon}) no-repeat center center;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  display: inline-block;
`;

function BaseButton({ children, onClick, align, icon, display = true }) {
  if (!display) {
    return null;
  }

  return (
    <ButtonWrapper align={align}>
      <Button onClick={(e) => onClick(e)}>
        {icon && <Icon icon={icon} />}

        {children}
      </Button>
    </ButtonWrapper>
  );
}

ButtonWrapper.propTypes = {
  align: PropTypes.string,
};

Button.defaultProps = {
  theme: PropTypes.shape({
    lightBlue: PropTypes.string.isRequired,
    white: PropTypes.string.isRequired,
  }).isRequired,
};

Icon.defaultProps = {
  icon: PropTypes.string.isRequired,
};

BaseButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  align: PropTypes.string,
  display: PropTypes.bool,
};

export default BaseButton;
