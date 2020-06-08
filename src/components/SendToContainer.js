import { connect } from "react-redux";
import SendTo from "./send-to/SendTo";

const mapStateToProps = ({ transaction }) => ({
  walletId: transaction.walletId,
});

export default connect(mapStateToProps)(SendTo);
