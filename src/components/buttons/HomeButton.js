import BaseButton from "./BaseButton";
import { connect } from "react-redux";
import { stepActions } from "../../actions";

const mapStateToProps = () => ({
  align: "center",
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(stepActions.changeStep(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseButton);
