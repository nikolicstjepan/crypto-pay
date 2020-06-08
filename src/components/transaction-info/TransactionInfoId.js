import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TransactionIdLabel = styled.div`
  margin-bottom: 11px;
`;

const TransactionIdCWrapper = styled.div`
  margin-bottom: 28px;
  font-weight: 500;
  color: ${(props) => props.theme.lightBlue};
`;

function TransactionId({ children }) {
  if (!children) {
    return null;
  }

  return (
    <React.Fragment>
      <TransactionIdLabel>Transaction ID</TransactionIdLabel>
      <TransactionIdCWrapper>{children}</TransactionIdCWrapper>
    </React.Fragment>
  );
}

TransactionIdCWrapper.defaultProps = {
  theme: PropTypes.shape({
    lightBlue: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionId;
