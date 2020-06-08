import BaseButton from "./BaseButton";
import { connect } from "react-redux";
import { stepActions } from "../../actions";
import refreshIcon from "../../assets/images/btn-refresh.svg";

const getAlignment = (step) => {
  if (step === 3) {
    return "center";
  } else {
    return "right";
  }
};

const getIcon = (step) => {
  if (step === 3) {
    return refreshIcon;
  } else {
    return null;
  }
};

const getText = (step) => {
  if (step === 3) {
    return "Refresh";
  } else {
    return "Next";
  }
};

const mapStateToProps = ({ step }) => ({
  align: getAlignment(step),
  icon: getIcon(step),
  children: getText(step),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(stepActions.handleNext()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseButton);
