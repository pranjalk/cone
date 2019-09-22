import { combineReducers } from "redux";

import shipping from './shippingReducer';
import billing from './billingReducer';
import productDetails from './productDetailsReducer';

const rootReducer = combineReducers({
  shipping,
  billing,
  productDetails
});

export default rootReducer;
