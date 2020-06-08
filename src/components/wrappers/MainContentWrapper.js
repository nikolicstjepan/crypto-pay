import styled from "styled-components";
import PropTypes from "prop-types";

const MainContentWrapper = styled.div`
  max-width: 530px;
  padding: 50px;
  background: ${(props) => props.theme.lightGray1};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0599808);
  border-radius: 4px 0 0 4px;
  position: relative;

  @media (max-width: 920px) {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;

MainContentWrapper.defaultProps = {
  theme: PropTypes.shape({
    lightGray1: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainContentWrapper;
