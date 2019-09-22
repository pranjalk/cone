import flatten from 'lodash/flatten';

import {
  inputChangeType,
  BILLING_PREFIX,
  SHIPPING_PREFIX,
  PRODUCT_PREFIX,
  PRODUCT_TOTAL_PRICE,
  PRODUCT_QUANTITY,
  PRODCUT_UNIT_PRICE,
} from '../constants.js';
import elementValidator from '../elementValidator';
export const SET_BILLING_ORDER_FORM_FIELD = 'SET_BILLING_ORDER_FORM_FIELD';
export const SET_SHIPPING_ORDER_FORM_FIELD = 'SET_SHIPPING_ORDER_FORM_FIELD';
export const CREATE_PRODUCT_ROW = 'CREATE_NEW_PRODUCT_ROW';
export const DELETE_PRODUCT_ROW = 'DELETE_PRODUCT_ROW';
export const SET_PRODUCT_ROW_FORM_FIELD = 'SET_PRODUCT_ROW_FORM_FIELD';


export function setBillingOrderFormElement(payload) {
  return (dispatch) => {
    const hasBlurred = (payload.changeType === inputChangeType.ON_BLUR);
    if (elementValidator(payload.element, payload.value)) {
      return dispatch({
        type: SET_BILLING_ORDER_FORM_FIELD,
        field: payload.element,
        value: payload.value,
        hasBlurred,
        error: false
      });
    }
    return dispatch({
      type: SET_BILLING_ORDER_FORM_FIELD,
      field: payload.element,
      value: payload.value,
      hasBlurred,
      error: true
    });
  };
}

export function setShippingOrderFormElement(payload) {
  return (dispatch) => {
    const hasBlurred = (payload.changeType === inputChangeType.ON_BLUR);
    if (elementValidator(payload.element, payload.value)) {
      return dispatch({
        type: SET_SHIPPING_ORDER_FORM_FIELD,
        field: payload.element,
        value: payload.value,
        hasBlurred,
        error: false
      });
    }
    return dispatch({
      type: SET_SHIPPING_ORDER_FORM_FIELD,
      field: payload.element,
      value: payload.value,
      hasBlurred,
      error: true
    });
  };
}

export function setProductRowFormElement(payload) {
  return (dispatch) => {
    const hasBlurred = (payload.payload.changeType === inputChangeType.ON_BLUR);
    if (elementValidator(payload.payload.element, payload.payload.value)) {
      return dispatch({
        type: SET_PRODUCT_ROW_FORM_FIELD,
        rowId: payload.rowId,
        payload: {
          field: payload.payload.element,
          value: payload.payload.value,
          hasBlurred,
          error: false
        }
      });
    }
    return dispatch({
      type: SET_PRODUCT_ROW_FORM_FIELD,
      rowId: payload.rowId,
      payload: {
        field: payload.payload.element,
        value: payload.payload.value,
        hasBlurred,
        error: true
      }
    });
  };
}

export function addProductRow() {
  return {
    type: CREATE_PRODUCT_ROW
  };
}


export function deleteProductRow(payload) {
  return {
    type: DELETE_PRODUCT_ROW,
    payload
  };
}

export function consoleLogWholeData() {
  return (dispatch, getState) => {
    const { shipping, billing, productDetails } = getState();
    const shippingErrorArray = Object.keys(shipping).map(key => { return shipping[key].error });
    const billingErrorArray = Object.keys(billing).map(key => { return billing[key].error });
    const productArrayErrorNonFlat = Object.keys(productDetails.data).map(key => {
      return Object.keys(productDetails.data[key]).map(dataKey => {
        return productDetails.data[key][dataKey].error;
      });
    })
    
    const productErrorArray = flatten(productArrayErrorNonFlat);
    let shippingGTG = false;
    let billingGTG = false;
    let productsGTG = false

    shippingGTG = shippingErrorArray.every(elem => { return elem === false; })
    billingGTG = billingErrorArray.every(elem => { return elem === false; })
    productsGTG = productErrorArray.every(elem => { return elem === false; })

    if (!shippingGTG) {
      window.alert('There are errors in shipping address please fix them');
    }
    if (!billingGTG) {
      window.alert('There are errors in billing address please fix them');
    }

    if (!productsGTG) {
      window.alert('There are errors in products list please fix them');
    }

    if (shippingGTG && billingGTG && productsGTG) {
      const fullData = {};
      fullData.shipping = {};
      fullData.billing = {};
      fullData.products = [];
      Object.keys(shipping).forEach(key => {
        fullData.shipping[key.replace(SHIPPING_PREFIX, '')] =  shipping[key].value
      });
      Object.keys(billing).forEach(key => {
        fullData.billing[key.replace(BILLING_PREFIX, '')] = billing[key].value
      });

      Object.keys(productDetails.data).forEach(key => {
        const entry = {};
        Object.keys(productDetails.data[key]).forEach(dataPoint => {
          entry[dataPoint.replace(PRODUCT_PREFIX, '')] = productDetails.data[key][dataPoint].value;
        })
        const totalPrice = productDetails.data[key][PRODUCT_QUANTITY].value * productDetails.data[key][PRODCUT_UNIT_PRICE].value;
        entry[PRODUCT_TOTAL_PRICE.replace(PRODUCT_PREFIX, '')] = totalPrice;
        fullData.products.push(entry);
      });
      console.log(fullData);
    }
  }
}
