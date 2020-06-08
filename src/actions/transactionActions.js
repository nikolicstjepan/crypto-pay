import * as types from "./actionTypes";

export const setWalletId = (payload) => {
  return {
    type: types.SET_WALLET_ID,
    payload,
  };
};

export const setTransaction = (payload) => {
  return {
    type: types.SET_TRANSACTION,
    payload,
  };
};
