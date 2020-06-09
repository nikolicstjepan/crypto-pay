import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BaseIcon from "../shared/BaseIcon";

const NavIcon = styled(BaseIcon)`
  background: url(${(props) => props.icon}) no-repeat center center;
`;

const NavItemWrapper = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
  height: 52px;
  padding: 0 20px 0 24px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const NavText = styled.div`
  margin-right: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.darkGray};
`;

const NavAction = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.lightBlue};
  cursor: pointer;
`;

function NavItem({ text, icon, step, onClick }) {
  return (
    <NavItemWrapper>
      <NavIcon icon={icon} />
      <NavText>{text}</NavText>
      <NavAction onClick={() => onClick(step)}>Change</NavAction>
    </NavItemWrapper>
  );
}

NavText.NavItemWrapper = {
  theme: PropTypes.shape({
    white: PropTypes.string.isRequired,
  }).isRequired,
};

NavText.defaultProps = {
  theme: PropTypes.shape({
    darkGray: PropTypes.string.isRequired,
  }).isRequired,
};

NavAction.defaultProps = {
  theme: PropTypes.shape({
    lightBlue: PropTypes.string.isRequired,
  }).isRequired,
};

export { NavIcon, NavText, NavAction };

export default NavItem;
