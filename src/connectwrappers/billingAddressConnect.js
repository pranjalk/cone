import { connect } from 'react-redux';
import { inputChangeType } from '../constants.js'
import { setBillingOrderFormElement } from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    billing: state.billing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBlurOrderFormElement: (payload) => {
      dispatch(setBillingOrderFormElement({
        element: payload.target.id,
        value: payload.target.value,
        changeType: inputChangeType.ON_BLUR
      }));
    },
    onChangeOrderFormElement: (payload) => {
      dispatch(setBillingOrderFormElement({
        element: payload.target.id,
        value: payload.target.value,
        changeType: inputChangeType.ON_CHANGE
      }));
    }
  };
};

const billingAddressConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default billingAddressConnect;
