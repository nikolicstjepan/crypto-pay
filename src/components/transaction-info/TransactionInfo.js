import React from "react";
import PropTypes from "prop-types";

import TransactionInfoWrapper from "./TransactionInfoWrapper";
import TransactionInfoHeader from "./TransactionInfoHeader";
import TransactionInfoId from "./TransactionInfoId";
import TransactionDescription from "./TransactionDescription";
import HomeButton from "../buttons/HomeButton";

function TransactionInfo({ transactionId, status, img, description, showHomeButton = false }) {
  return (
    <TransactionInfoWrapper>
      <TransactionInfoHeader img={img}>{status}</TransactionInfoHeader>
      <TransactionInfoId>{transactionId}</TransactionInfoId>
      <TransactionDescription>{description}</TransactionDescription>
      <HomeButton display={showHomeButton}>Home</HomeButton>
    </TransactionInfoWrapper>
  );
}

TransactionInfo.propTypes = {
  status: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  transactionId: PropTypes.string,
  showHomeButton: PropTypes.bool.isRequired,
};

export default TransactionInfo;
