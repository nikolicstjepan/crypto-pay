import styled from "styled-components";
import PropTypes from "prop-types";

const SidebarWrapper = styled.div`
  max-width: 390px;
  padding: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0599808);
  border-radius: 0 4px 4px 0;
  background: ${(props) => props.theme.white};

  @media (max-width: 920px) {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;

SidebarWrapper.defaultProps = {
  theme: PropTypes.shape({
    white: PropTypes.string.isRequired,
  }).isRequired,
};

export default SidebarWrapper;
