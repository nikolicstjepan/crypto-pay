import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BaseButton from "../buttons/BaseButton";
import Title from "../shared/titles/H2Title";

const WalletInfoWrapper = styled.div`
  margin-bottom: 48px;
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  position: relative;
`;

const WalletIdInput = styled.input`
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.lightGray2};
  color: ${(props) => props.theme.mediumGray2};
  width: 75%;
  text-align: center;
  height: 100%;
`;

function SendTo({ walletId }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");

    e.target.focus();
    setCopySuccess("Copied!");

    setTimeout(() => {
      setCopySuccess("Copy Again?");
    }, 2000);
  }

  return (
    <WalletInfoWrapper>
      <Title>Send your payment to</Title>
      <FlexRow>
        <WalletIdInput ref={textAreaRef} readOnly defaultValue={walletId} />
        <BaseButton onClick={copyToClipboard}>{copySuccess}</BaseButton>
      </FlexRow>
    </WalletInfoWrapper>
  );
}

WalletIdInput.defaultProps = {
  theme: PropTypes.shape({
    lightGray2: PropTypes.string.isRequired,
    mediumGray2: PropTypes.string.isRequired,
    white: PropTypes.string.isRequired,
  }).isRequired,
};

SendTo.propTypes = {
  walletId: PropTypes.string.isRequired,
};

export default SendTo;
