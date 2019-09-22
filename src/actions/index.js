import { inputChangeType } from '../constants.js';

export const SET_BILLING_ORDER_FORM_FIELD = 'SET_BILLING_ORDER_FORM_FIELD';
export const SET_SHIPPING_ORDER_FORM_FIELD = 'SET_SHIPPING_ORDER_FORM_FIELD';

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
