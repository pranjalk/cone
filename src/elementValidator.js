import isEmpty from 'lodash/isEmpty';

import {
  BILLING_FIRST_NAME,
  BILLING_LAST_NAME,
  BILLING_ADDRESS_LINE_1,
  BILLING_ADDRESS_LINE_2,
  BILLING_CITY,
  BILLING_STATE,
  BILLING_ZIPCODE,
  BILLING_COUNTRY,
  BILLING_ORDER_DATE,
  SHIPPING_FIRST_NAME,
  SHIPPING_LAST_NAME,
  SHIPPING_ADDRESS_LINE_1,
  SHIPPING_ADDRESS_LINE_2,
  SHIPPING_CITY,
  SHIPPING_STATE,
  SHIPPING_ZIPCODE,
  SHIPPING_COUNTRY,
  SHIPPING_ORDER_DATE,
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_QUANTITY,
  PRODCUT_UNIT_PRICE,
  PRODUCT_TOTAL_PRICE,
  PRODUCT_NOTES,
} from './constants.js';

export default function elementValidator(element, value) {
  switch(element) {
  case BILLING_FIRST_NAME:
  case BILLING_LAST_NAME:
  case BILLING_CITY:
  case BILLING_STATE:
  case BILLING_COUNTRY:
  case SHIPPING_FIRST_NAME:
  case SHIPPING_LAST_NAME:
  case SHIPPING_CITY:
  case SHIPPING_STATE:
  case SHIPPING_COUNTRY:
  case PRODUCT_NAME: {
    const regex = /^[a-zA-Z -]+$/g;
    const result = regex.exec(value);
    if (!isEmpty(result)) {
      return true;
    }
    return false;
  }
  case SHIPPING_ORDER_DATE:
  case BILLING_ORDER_DATE: {
    return true;
  }
  
  case PRODCUT_UNIT_PRICE: {
    const regex = /^[0-9.]+$/g;
    const result = regex.exec(value);
    if (!isEmpty(result)) {
      return true;
    }
    return false;
  }
  case PRODUCT_ID:
  case PRODUCT_QUANTITY:
  case SHIPPING_ZIPCODE:
  case PRODUCT_TOTAL_PRICE:
  case BILLING_ZIPCODE: {
    const regex = /^[0-9]+$/g;
    const result = regex.exec(value);
    if (!isEmpty(result)) {
      return true;
    }
    return false;
  }
  case BILLING_ADDRESS_LINE_1:
  case BILLING_ADDRESS_LINE_2:
  case SHIPPING_ADDRESS_LINE_1:
  case SHIPPING_ADDRESS_LINE_2:
  case PRODUCT_NOTES:
  default: {
    const regex = /^[0-9a-zA-Z -]+$/g;
    const result = regex.exec(value);
    if (!isEmpty(result)) {
      return true;
    }
    return false;
  }
  }
}
