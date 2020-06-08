import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavItem from "./NavItem";

const NavigationWrapper = styled.ul`
  padding: 0;
  margin-bottom: 40px;
`;

function Navigation({ navList, onClick }) {
  return (
    <NavigationWrapper>
      {navList.map((item, i) => (
        <NavItem key={i} {...item} onClick={() => onClick(item.step)} />
      ))}
    </NavigationWrapper>
  );
}

Navigation.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      step: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
