import * as types from "../actions/actionTypes";

function stepReducer(state = 0, action) {
  switch (action.type) {
    case types.NEXT_STEP:
      return state + 1;
    case types.PREVIOUS_STEP:
      return state - 1;
    case types.CHANGE_STEP:
      return action.payload;
    default:
      return state;
  }
}

export default stepReducer;
