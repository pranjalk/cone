import React, { PureComponent } from 'react'
import cx from 'classnames';
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
    const { billing } = this.props;
    return (
      <div className='upper-form-left'>
        <div className='form-heading'>
          Billing Address
        </div>
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_FIRST_NAME].error && billing[BILLING_FIRST_NAME].hasBlurred
          })}
          placeholder='First name'
          value={billing[BILLING_FIRST_NAME].value}
          id={BILLING_FIRST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_LAST_NAME].error && billing[BILLING_LAST_NAME].hasBlurred
          })}
          placeholder='Last name'
          value={billing[BILLING_LAST_NAME].value}
          id={BILLING_LAST_NAME}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_ADDRESS_LINE_1].error && billing[BILLING_ADDRESS_LINE_1].hasBlurred
          })}
          placeholder='Address line 1'
          value={billing[BILLING_ADDRESS_LINE_1].value}
          id={BILLING_ADDRESS_LINE_1}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_ADDRESS_LINE_2].error && billing[BILLING_ADDRESS_LINE_2].hasBlurred
          })}
          placeholder='Address line 2'
          value={billing[BILLING_ADDRESS_LINE_2].value}
          id={BILLING_ADDRESS_LINE_2}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_CITY].error && billing[BILLING_CITY].hasBlurred
          })}
          placeholder='City'
          value={billing[BILLING_CITY].value}
          id={BILLING_CITY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_STATE].error && billing[BILLING_STATE].hasBlurred
          })}
          placeholder='State'
          value={billing[BILLING_STATE].value}
          id={BILLING_STATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_ZIPCODE].error && billing[BILLING_ZIPCODE].hasBlurred
          })}
          placeholder='Zipcode'
          value={billing[BILLING_ZIPCODE].value}
          id={BILLING_ZIPCODE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <input
          type='text'
          className={cx('custom-input', {
            error: billing[BILLING_COUNTRY].error && billing[BILLING_COUNTRY].hasBlurred
          })}
          placeholder='Country'
          value={billing[BILLING_COUNTRY].value}
          id={BILLING_COUNTRY}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
        <div className='form-heading'>
          Order Date
        </div>
        <input
          type='date'
          className={cx('date-input', {
            error: billing[BILLING_ORDER_DATE].error && billing[BILLING_ORDER_DATE].hasBlurred
          })}
          value={billing[BILLING_ORDER_DATE].value}
          id={BILLING_ORDER_DATE}
          onBlur={this.props.onBlurOrderFormElement}
          onChange={this.props.onChangeOrderFormElement}
        />
      </div>
    );
  }
}

export default billingAddressConnect(BillingAddress);
