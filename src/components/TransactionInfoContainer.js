import { connect } from "react-redux";
import TransactionInfo from "./transaction-info/TransactionInfo";
import successImg from "../assets/images/success.svg";
import pendingImg from "../assets/images/pending.svg";

const isSuccess = (status) => status.toLowerCase().includes("success");

const mapStateToProps = ({ transaction }) => ({
  status: transaction.status,
  img: isSuccess(transaction.status) ? successImg : pendingImg,
  transactionId: !isSuccess(transaction.status) ? transaction.id : null,
  description: transaction.description,
  showHomeButton: isSuccess(transaction.status),
});

export default connect(mapStateToProps)(TransactionInfo);
