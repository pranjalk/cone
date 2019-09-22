import { inputChangeType } from '../constants.js';

export const SET_BILLING_ORDER_FORM_FIELD = 'SET_BILLING_ORDER_FORM_FIELD';
export const SET_SHIPPING_ORDER_FORM_FIELD = 'SET_SHIPPING_ORDER_FORM_FIELD';
export const CREATE_PRODUCT_ROW = 'CREATE_NEW_PRODUCT_ROW';
export const DELETE_PRODUCT_ROW = 'DELETE_PRODUCT_ROW';
export const SET_PRODUCT_ROW_FORM_FIELD = 'SET_PRODUCT_ROW_FORM_FIELD';


export function setBillingOrderFormElement(payload) {
  return (dispatch) => {
    const hasBlurred = (payload.changeType === inputChangeType.ON_BLUR);
    // if (orderFormValidation(payload.element, payload.value)) {
    //   return dispatch({
    //     type: SET_ORDER_FORM_FIELD,
    //     field: payload.element,
    //     value: payload.value,
    //     hasBlurred,
    //     error: false
    //   });
    // }
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
    // if (orderFormValidation(payload.element, payload.value)) {
    //   return dispatch({
    //     type: SET_ORDER_FORM_FIELD,
    //     field: payload.element,
    //     value: payload.value,
    //     hasBlurred,
    //     error: false
    //   });
    // }
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
    const hasBlurred = (payload.changeType === inputChangeType.ON_BLUR);
    // if (orderFormValidation(payload.element, payload.value)) {
    //   return dispatch({
    //     type: SET_ORDER_FORM_FIELD,
    //     field: payload.element,
    //     value: payload.value,
    //     hasBlurred,
    //     error: false
    //   });
    // }
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
