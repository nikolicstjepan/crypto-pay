import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TransactionInfoHeaderWrapper = styled.div`
  margin-bottom: 20px;
`;
const Image = styled.img`
  margin-bottom: 16px;
`;

const StatusWrapper = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  color: ${(props) => props.theme.darkGray};
  margin-top: 0;
  margin-bottom: 10px;
`;

const TransactionInfoHeader = ({ img, children }) => (
  <TransactionInfoHeaderWrapper>
    <Image src={img} alt="img" />
    <StatusWrapper>{children}</StatusWrapper>
  </TransactionInfoHeaderWrapper>
);

StatusWrapper.defaultProps = {
  theme: PropTypes.shape({
    darkGray: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionInfoHeader;
