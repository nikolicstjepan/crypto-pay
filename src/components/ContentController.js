import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CryptoSelectorContainer from "./CryptoSelectorContainer";
import TotalContainer from "./TotalContainer";
import NextButton from "./buttons/NextButton";
import PromoSelectorContainer from "./PromoSelectorContainer";
import SendTo from "./SendToContainer";
import TransactionInfoContainer from "./TransactionInfoContainer";

const ContentController = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <CryptoSelectorContainer />
          <TotalContainer />
          <NextButton />
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <TotalContainer />
          <PromoSelectorContainer />
          <NextButton />
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <TotalContainer />
          <SendTo />
          <NextButton />
        </React.Fragment>
      );
    case 3:
      return (
        <React.Fragment>
          <TransactionInfoContainer />
          <NextButton />
        </React.Fragment>
      );
    case 4:
      return <TransactionInfoContainer />;
    default:
      return null;
  }
};

const mapStateToProps = ({ step }) => ({
  step,
});

ContentController.propTypes = {
  step: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ContentController);
