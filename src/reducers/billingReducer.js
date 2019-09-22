import {
  BILLING_FIRST_NAME,
  BILLING_LAST_NAME,
  BILLING_ADDRESS_LINE_1,
  BILLING_ADDRESS_LINE_2,
  BILLING_CITY,
  BILLING_STATE,
  BILLING_ZIPCODE,
  BILLING_COUNTRY,
  BILLING_ORDER_DATE
} from '../constants.js';

import { SET_BILLING_ORDER_FORM_FIELD } from '../actions/index.js';

const initialState = {
  [BILLING_FIRST_NAME]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_LAST_NAME]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_ADDRESS_LINE_1]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_ADDRESS_LINE_2]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_CITY]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_STATE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_ZIPCODE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_COUNTRY]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [BILLING_ORDER_DATE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  }
}

const billingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILLING_ORDER_FORM_FIELD: {
      const newField = {
        value: action.value,
        error: action.error,
        hasBlurred: action.hasBlurred,
        hasChanged: true
      };
      return {
        ...state,
        [action.field]: newField
      };
    }
    default: {
      return {
        ...state
      }
    }
  }

};

export default billingReducer;
