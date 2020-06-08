import { connect } from "react-redux";
import Loader from "./loader/Loader";

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(Loader);
