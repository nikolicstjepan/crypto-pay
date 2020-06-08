import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Title from "../shared/titles/H2Title";

const TotalWrapper = styled.div`
  margin-bottom: 55px;
`;

const TotalItemWrapper = styled.ul`
  padding: 0;
`;

const TotalItem = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
  height: 70px;
  padding: 0 20px 0 24px;
  align-items: center;
  display: flex;
`;

const TotalTextWrapper = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  font-family: "Roboto Condensed";
  color: ${(props) => props.theme.mediumGray};
  text-transform: uppercase;
  order: 0;

  span {
    color: ${(props) => props.theme.gray};
  }
`;

function Total({ name, amount }) {
  return (
    <TotalWrapper>
      <Title> Total</Title>
      <TotalItemWrapper>
        <TotalItem>
          <TotalTextWrapper>
            {name} <span>{amount}</span>
          </TotalTextWrapper>
        </TotalItem>
      </TotalItemWrapper>
    </TotalWrapper>
  );
}

TotalItem.defaultProps = {
  theme: PropTypes.shape({
    white: PropTypes.string.isRequired,
  }).isRequired,
};

TotalTextWrapper.defaultProps = {
  theme: PropTypes.shape({
    mediumGray: PropTypes.string.isRequired,
    gray: PropTypes.string.isRequired,
  }).isRequired,
};

Total.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Total;
