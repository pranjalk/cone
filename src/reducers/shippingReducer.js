import {
  SHIPPING_FIRST_NAME,
  SHIPPING_LAST_NAME,
  SHIPPING_ADDRESS_LINE_1,
  SHIPPING_ADDRESS_LINE_2,
  SHIPPING_CITY,
  SHIPPING_STATE,
  SHIPPING_ZIPCODE,
  SHIPPING_COUNTRY,
  SHIPPING_ORDER_DATE
} from '../constants.js';

import { SET_ORDER_FORM_FIELD } from '../actions/index.js';

const initialState = {
  [SHIPPING_FIRST_NAME]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_LAST_NAME]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_ADDRESS_LINE_1]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_ADDRESS_LINE_2]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_CITY]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_STATE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_ZIPCODE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_COUNTRY]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [SHIPPING_ORDER_DATE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  }
}

const shippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_FORM_FIELD: {
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

export default shippingReducer;
