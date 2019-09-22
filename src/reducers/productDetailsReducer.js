import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_QUANTITY,
  PRODCUT_UNIT_PRICE,
  PRODUCT_TOTAL_PRICE,
  PRODUCT_NOTES,
} from '../constants.js'

import {
  CREATE_PRODUCT_ROW,
  DELETE_PRODUCT_ROW,
  SET_PRODUCT_ROW_FORM_FIELD,
} from '../actions/index.js';

const productRowInitialState = {
  [PRODUCT_ID]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [PRODUCT_NAME]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [PRODUCT_QUANTITY]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [PRODCUT_UNIT_PRICE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [PRODUCT_TOTAL_PRICE]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
  [PRODUCT_NOTES]: {
    value: '',
    hasChanged: false,
    hasBlurred: false,
    error: true,
  },
}

const initialState = {
  productRowCount: 1,
  data: {
    "1": {
      ...productRowInitialState
    }
  }
}

const productRowReducer = (state=productRowInitialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_ROW_FORM_FIELD: {
      const newField = {
        value: action.payload.value,
        error: action.payload.error,
        hasBlurred: action.payload.hasBlurred,
        hasChanged: true
      };
      return {
        ...state,
        [action.payload.field]: newField
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_ROW: {
      return {
        ...state,
        productRowCount: state.productRowCount + 1,
        data: {
          ...state.data,
          [state.productRowCount + 1]: {
            ...productRowInitialState
          }
        }
      }
    }
    case DELETE_PRODUCT_ROW: {
      const nextData = {
        ...state.data
      };
      delete nextData[action.payload.keyToDelete];
      return {
        ...state,
        data: nextData
      }
    }
    case SET_PRODUCT_ROW_FORM_FIELD: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.rowId]: productRowReducer(state.data[action.rowId], action)
        }
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};

export default productDetailsReducer;
