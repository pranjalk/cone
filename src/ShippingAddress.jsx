import React, { PureComponent } from 'react'
import cx from 'classnames';
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
    const { shipping } = this.props;
    return (
      <div className='upper-form-right'>
        <div className='form-heading'>
          Shipping Address
        </div>
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_FIRST_NAME].error && shipping[SHIPPING_FIRST_NAME].hasBlurred
          })}
          placeholder='First name'
          value={shipping[SHIPPING_FIRST_NAME].value}
          id={SHIPPING_FIRST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_LAST_NAME].error && shipping[SHIPPING_LAST_NAME].hasBlurred
          })}
          placeholder='Last name'
          value={shipping[SHIPPING_LAST_NAME].value}
          id={SHIPPING_LAST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_ADDRESS_LINE_1].error && shipping[SHIPPING_ADDRESS_LINE_1].hasBlurred
          })}
          placeholder='Address line 1'
          value={shipping[SHIPPING_ADDRESS_LINE_1].value}
          id={SHIPPING_ADDRESS_LINE_1}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_ADDRESS_LINE_2].error && shipping[SHIPPING_ADDRESS_LINE_2].hasBlurred
          })}
          placeholder='Address line 2'
          value={shipping[SHIPPING_ADDRESS_LINE_2].value}
          id={SHIPPING_ADDRESS_LINE_2}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_CITY].error && shipping[SHIPPING_CITY].hasBlurred
          })}
          placeholder='City'
          value={shipping[SHIPPING_CITY].value}
          id={SHIPPING_CITY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_STATE].error && shipping[SHIPPING_STATE].hasBlurred
          })}
          placeholder='State'
          value={shipping[SHIPPING_STATE].value}
          id={SHIPPING_STATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_ZIPCODE].error && shipping[SHIPPING_ZIPCODE].hasBlurred
          })}
          placeholder='Zipcode'
          value={shipping[SHIPPING_ZIPCODE].value}
          id={SHIPPING_ZIPCODE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: shipping[SHIPPING_COUNTRY].error && shipping[SHIPPING_COUNTRY].hasBlurred
          })}
          placeholder='Country'
          value={shipping[SHIPPING_COUNTRY].value}
          id={SHIPPING_COUNTRY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <div className='form-heading'>
          Expected Delivery
        </div>
        <input
          type='date'
          className={cx('date-input', {
            error: shipping[SHIPPING_ORDER_DATE].error && shipping[SHIPPING_ORDER_DATE].hasBlurred
          })}
          value={shipping[SHIPPING_ORDER_DATE].value}
          id={SHIPPING_ORDER_DATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
      </div>
    );
  }
}

export default shippingAddressConnect(ShippingAddress);
