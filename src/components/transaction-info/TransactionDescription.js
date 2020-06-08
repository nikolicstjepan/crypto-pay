import React from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  max-width: 310px;
  margin: 30px auto;
`;

function TransactionDescription({ children }) {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
}

export default TransactionDescription;
