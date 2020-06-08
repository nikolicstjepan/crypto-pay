import * as types from "../actions/actionTypes";

function transactionReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_WALLET_ID:
      return { ...state, walletId: action.payload };
    case types.SET_TRANSACTION:
      const { id, status, description } = action.payload;
      return { ...state, id, status, description };
    default:
      return state;
  }
}

export default transactionReducer;
