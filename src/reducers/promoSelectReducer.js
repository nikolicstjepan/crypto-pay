import * as types from "../actions/actionTypes";

const initialState = {
  title: "Select promo",
  selected: 0,
  options: [],
};

function promoSelectReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROMO_LIST:
      return { ...state, options: action.payload };
    case types.SELECT_PROMO:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}

export default promoSelectReducer;
