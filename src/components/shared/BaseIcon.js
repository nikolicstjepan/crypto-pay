import styled from "styled-components";
import PropTypes from "prop-types";

const BaseIcon = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 50%;
  margin-right: 10px;
`;

BaseIcon.defaultProps = {
  theme: PropTypes.shape({
    lightGray: PropTypes.string.isRequired,
  }).isRequired,
};

export default BaseIcon;
