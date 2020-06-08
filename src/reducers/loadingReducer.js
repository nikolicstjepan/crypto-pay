import * as types from "../actions/actionTypes";

function loadingReducer(state = false, action) {
  switch (action.type) {
    case types.START_LOADING:
      return true;
    case types.FINISH_LOADING:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
