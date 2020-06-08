import * as types from "../actions/actionTypes";

const test = {
  title: "Select your crypto currency",
  selected: 0,
  options: [],
};

function promoSelectReducer(state = test, action) {
  switch (action.type) {
    case types.SET_CRYPTO_LIST:
      return { ...state, options: action.payload };
    case types.SELECT_CRYPTO:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}

export default promoSelectReducer;
