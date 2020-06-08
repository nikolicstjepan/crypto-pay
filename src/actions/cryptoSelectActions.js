import * as api from "../lib/api";
import * as types from "./actionTypes";

import { startLoading, finishLoading } from "./loadingActions";

export const setCryptoList = (payload) => {
  return {
    type: types.SET_CRYPTO_LIST,
    payload,
  };
};

export const selectCrypto = (payload) => {
  return {
    type: types.SELECT_CRYPTO,
    payload,
  };
};

export const fetchCryptoList = () => {
  return (dispatch, getState) => {
    dispatch(startLoading());

    api.fetchCryptos().then((res) => {
      dispatch(setCryptoList(res));
      dispatch(finishLoading());
    });
  };
};
