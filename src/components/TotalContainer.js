import { connect } from "react-redux";
import { FIATAmountToPay, FIATCurrencyName } from "../lib/config";
import { getSelected, calculateAmount } from "../lib/helpers";
import Total from "./total/Total";

const getSelectedCryptoRate = (select) => {
  const selectedCurrency = getSelected(select);

  if (!selectedCurrency) {
    return null;
  }

  return selectedCurrency.rate;
};

const getSelectedCryptoName = (select) => {
  const selectedCurrency = getSelected(select);

  if (!selectedCurrency) {
    return FIATCurrencyName;
  }

  return selectedCurrency.text;
};

const mapStateToProps = ({ cryptoSelect }) => ({
  amount: calculateAmount(FIATAmountToPay, getSelectedCryptoRate(cryptoSelect)),
  name: getSelectedCryptoName(cryptoSelect),
});

export default connect(mapStateToProps)(Total);
