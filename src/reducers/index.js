import { combineReducers } from "redux";

import stepReducer from "./stepReducer";
import cryptoSelectReducer from "./cryptoSelectReducer";
import promoSelectReducer from "./promoSelectReducer";
import transactionReducer from "./transactionReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  step: stepReducer,
  cryptoSelect: cryptoSelectReducer,
  promoSelect: promoSelectReducer,
  transaction: transactionReducer,
  loading: loadingReducer,
});
