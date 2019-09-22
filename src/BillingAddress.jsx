import React, { PureComponent } from 'react'
import billingAddressConnect from './connectwrappers/billingAddressConnect.js';
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
} from './constants.js';


class BillingAddress extends PureComponent {
  render() {
    return (
      <div className='upper-form-left'>
        <div className='form-heading'>
          Billing Address
        </div>
        <input
          type='text'
          className='custom-input'
          placeholder='First name'
          value={this.props.billing[BILLING_FIRST_NAME].value}
          id={BILLING_FIRST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Last name'
          value={this.props.billing[BILLING_LAST_NAME].value}
          id={BILLING_LAST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Address line 1'
          value={this.props.billing[BILLING_ADDRESS_LINE_1].value}
          id={BILLING_ADDRESS_LINE_1}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Address line 2'
          value={this.props.billing[BILLING_ADDRESS_LINE_2].value}
          id={BILLING_ADDRESS_LINE_2}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='City'
          value={this.props.billing[BILLING_CITY].value}
          id={BILLING_CITY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='State'
          value={this.props.billing[BILLING_STATE].value}
          id={BILLING_STATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Zipcode'
          value={this.props.billing[BILLING_ZIPCODE].value}
          id={BILLING_ZIPCODE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Country'
          value={this.props.billing[BILLING_COUNTRY].value}
          id={BILLING_COUNTRY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <div className='form-heading'>
          Order Date
        </div>
        <input
          type='date'
          className='date-input'
          value={this.props.billing[BILLING_ORDER_DATE].value}
          id={BILLING_ORDER_DATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
      </div>
    );
  }
}

export default billingAddressConnect(BillingAddress);
