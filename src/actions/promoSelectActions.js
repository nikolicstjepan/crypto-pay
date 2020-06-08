import * as api from "../lib/api";
import * as types from "./actionTypes";

import { startLoading, finishLoading } from "./loadingActions";

export const setPromoList = (payload) => {
  return {
    type: types.SET_PROMO_LIST,
    payload,
  };
};

export const selectPromo = (payload) => {
  return {
    type: types.SELECT_PROMO,
    payload,
  };
};

export const fetchPromoList = () => {
  return (dispatch, getState) => {
    dispatch(startLoading());

    api.fetchPromos().then((res) => {
      dispatch(setPromoList(res));
      dispatch(finishLoading());
    });
  };
};
