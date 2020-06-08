import styled from "styled-components";
import PropTypes from "prop-types";

const TransactionInfoWrapper = styled.div`
  margin-bottom: 42px;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0599808);
  padding: 55px 0 55px 0;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.mediumGray2};
`;

TransactionInfoWrapper.defaultProps = {
  theme: PropTypes.shape({
    mediumGray2: PropTypes.string.isRequired,
    white: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionInfoWrapper;
