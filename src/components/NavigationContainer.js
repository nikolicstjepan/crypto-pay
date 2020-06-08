import { connect } from "react-redux";
import { getSelected } from "../lib/helpers";
import { stepActions } from "../actions";

import Navigation from "./navigation/Navigation";

import btcIcon from "../assets/images/btc.svg";
import checkedIcon from "../assets/images/checked.svg";

const getNavList = ({ step, cryptoSelect, promoSelect }) => {
  const navList = [
    { text: "Crypto currency", icon: btcIcon, step: 0 }, // not changeable
  ];

  if (cryptoSelect.options.length) {
    const selectedCurrency = getSelected(cryptoSelect);

    navList.push({
      text: selectedCurrency.text,
      icon: checkedIcon,
      step: 0,
    });
  }

  if (promoSelect.options.length) {
    const selectedPromo = getSelected(promoSelect);

    navList.push({
      text: selectedPromo.text,
      icon: checkedIcon,
      step: 1,
    });
  }

  return navList.slice(0, step + 1);
};

const mapStateToProps = ({ step, cryptoSelect, promoSelect }) => ({
  navList: getNavList({ step, cryptoSelect, promoSelect }),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (step) => dispatch(stepActions.changeStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
