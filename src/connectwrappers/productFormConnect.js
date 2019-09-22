import { connect } from 'react-redux';
import { inputChangeType } from '../constants.js'
import {
  setProductRowFormElement,
  addProductRow,
  deleteProductRow
} from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBlurProductRowElement: (field) => (evt) => {
      dispatch(setProductRowFormElement({
        rowId: field.rowId,
        payload: {
          element: field.elem,
          value: evt.target.value,
          changeType: inputChangeType.ON_BLUR
        }
      }));
    },
    onChangeProductRowElement: (field) => (evt) => {
      dispatch(setProductRowFormElement({
        rowId: field.rowId,
        payload: {
          element: field.elem,
          value: evt.target.value,
          changeType: inputChangeType.ON_CHANGE
        }
      }));
    },
    addProductRow: (payload) => {
      dispatch(addProductRow(payload));
    },
    deleteProductRow: (payload) => {
      dispatch(deleteProductRow(payload));
    }
  };
};

const productFormConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default productFormConnect;
