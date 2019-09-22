import { connect } from 'react-redux';
import { inputChangeType } from '../constants.js'
import { setOrderFormElement } from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    shipping: state.shipping,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBlurOrderFormElement: (payload) => {
      dispatch(setOrderFormElement({
        element: payload.target.id,
        value: payload.target.value,
        changeType: inputChangeType.ON_BLUR
      }));
    },
    onChangeOrderFormElement: (payload) => {
      dispatch(setOrderFormElement({
        element: payload.target.id,
        value: payload.target.value,
        changeType: inputChangeType.ON_CHANGE
      }));
    }
  };
};

const shippingAddressConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default shippingAddressConnect;
