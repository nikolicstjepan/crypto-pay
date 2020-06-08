import { connect } from "react-redux";

import { getSelected } from "../lib/helpers";
import { promoSelectActions } from "../actions";
import OptionList from "./selector/OptionList";

const mapStateToProps = ({ promoSelect }) => ({
  select: promoSelect,
  selected: getSelected(promoSelect),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(promoSelectActions.selectPromo(id)),
  fetchOptions: () => dispatch(promoSelectActions.fetchPromoList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionList);
