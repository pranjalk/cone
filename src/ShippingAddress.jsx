import React, { PureComponent } from 'react'
import shippingAddressConnect from './connectwrappers/shippingAddressConnect';

import {
  SHIPPING_FIRST_NAME,
  SHIPPING_LAST_NAME,
  SHIPPING_ADDRESS_LINE_1,
  SHIPPING_ADDRESS_LINE_2,
  SHIPPING_CITY,
  SHIPPING_STATE,
  SHIPPING_ZIPCODE,
  SHIPPING_COUNTRY,
  SHIPPING_ORDER_DATE,
} from './constants.js';

class ShippingAddress extends PureComponent {
  render() {
    return (
      <div className='upper-form-right'>
        <div className='form-heading'>
          Shipping Address
        </div>
        <input
          type='text'
          className='custom-input'
          placeholder='First name'
          value={this.props.shipping[SHIPPING_FIRST_NAME].value}
          id={SHIPPING_FIRST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Last name'
          value={this.props.shipping[SHIPPING_LAST_NAME].value}
          id={SHIPPING_LAST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Address line 1'
          value={this.props.shipping[SHIPPING_ADDRESS_LINE_1].value}
          id={SHIPPING_ADDRESS_LINE_1}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Address line 2'
          value={this.props.shipping[SHIPPING_ADDRESS_LINE_2].value}
          id={SHIPPING_ADDRESS_LINE_2}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='City'
          value={this.props.shipping[SHIPPING_CITY].value}
          id={SHIPPING_CITY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='State'
          value={this.props.shipping[SHIPPING_STATE].value}
          id={SHIPPING_STATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Zipcode'
          value={this.props.shipping[SHIPPING_ZIPCODE].value}
          id={SHIPPING_ZIPCODE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className='custom-input'
          placeholder='Country'
          value={this.props.shipping[SHIPPING_COUNTRY].value}
          id={SHIPPING_COUNTRY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <div className='form-heading'>
          Expected Delivery
        </div>
        <input
          type='date'
          className='date-input'
          value={this.props.shipping[SHIPPING_ORDER_DATE].value}
          id={SHIPPING_ORDER_DATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
      </div>
    );
  }
}

export default shippingAddressConnect(ShippingAddress);
