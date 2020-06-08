import * as types from "./actionTypes";
import * as api from "../lib/api";
import { getSelected, calculateAmount } from "../lib/helpers";
import { FIATAmountToPay } from "../lib/config";
import { startLoading, finishLoading } from "./loadingActions";
import * as transactionActions from "./transactionActions";

export const nextStep = () => {
  return {
    type: types.NEXT_STEP,
  };
};

export const changeStep = (payload) => {
  return {
    type: types.CHANGE_STEP,
    payload,
  };
};

export const fetchWalletIdAndGoToNextStep = () => {
  return (dispatch, getState) => {
    const { cryptoSelect, promoSelect } = getState();

    const selectedCurrency = getSelected(cryptoSelect);
    const selectedPromo = getSelected(promoSelect);

    const currency = selectedCurrency.text;
    const promotionOffer = selectedPromo.text;

    const amount = calculateAmount(FIATAmountToPay, selectedCurrency.rate);

    dispatch(startLoading());

    api.fetchWalletId({ currency, amount, promotionOffer }).then((walletId) => {
      dispatch(transactionActions.setWalletId(walletId));
      dispatch(finishLoading());
      dispatch(nextStep());
    });
  };
};

export const fetchCreateTransactionAndGoToNextStep = () => {
  return (dispatch) => {
    dispatch(startLoading());

    api.fetchTransaction().then((transactionInfo) => {
      dispatch(transactionActions.setTransaction({ ...transactionInfo }));
      dispatch(finishLoading());
      dispatch(nextStep());
    });
  };
};

export const fetchTransactionStatusAndGoToNextStep = (id) => {
  return (dispatch) => {
    dispatch(startLoading());

    api.fetchTransactionStatus(id).then((transactionInfo) => {
      dispatch(transactionActions.setTransaction({ ...transactionInfo }));
      dispatch(finishLoading());
      dispatch(nextStep());
    });
  };
};

export const handleNext = () => {
  return (dispatch, getState) => {
    const { step } = getState();

    switch (step) {
      case 1:
        return dispatch(fetchWalletIdAndGoToNextStep());
      case 2:
        return dispatch(fetchCreateTransactionAndGoToNextStep());
      case 3:
        return dispatch(fetchTransactionStatusAndGoToNextStep());
      default:
        return dispatch(nextStep());
    }
  };
};
