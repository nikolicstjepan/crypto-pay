import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import selectedIcon from "../../assets/images/checked.svg";

import BaseIcon from "../shared/BaseIcon";

const OptionIcon = styled(BaseIcon)`
  ${(props) => props.selected && `background: url(${selectedIcon}) no-repeat center center;`}
`;

const OptionWrapper = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
  height: 70px;
  padding: 0 20px 0 24px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const OptionText = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  font-family: "Roboto Condensed";
  color: ${(props) => props.theme.mediumGray};
`;

function Option({ selected, onClick, text, id }) {
  return (
    <OptionWrapper onClick={() => onClick(id)}>
      <OptionIcon selected={selected} />
      <OptionText>{text}</OptionText>
    </OptionWrapper>
  );
}

OptionWrapper.defaultProps = {
  theme: PropTypes.shape({
    white: PropTypes.string.isRequired,
  }).isRequired,
};

OptionText.defaultProps = {
  theme: PropTypes.shape({
    mediumGray: PropTypes.string.isRequired,
  }).isRequired,
};

Option.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export { OptionWrapper, OptionIcon, OptionText };
export default Option;
