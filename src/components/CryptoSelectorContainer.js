import { connect } from "react-redux";

import { getSelected } from "../lib/helpers";
import { cryptoSelectActions } from "../actions";

import OptionList from "./selector/OptionList";

const mapStateToProps = ({ cryptoSelect }) => ({
  select: cryptoSelect,
  selected: getSelected(cryptoSelect),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(cryptoSelectActions.selectCrypto(id)),
  fetchOptions: () => dispatch(cryptoSelectActions.fetchCryptoList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionList);
