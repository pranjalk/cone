import React, { Component } from 'react'
import cx from 'classnames';
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_QUANTITY,
  PRODCUT_UNIT_PRICE,
  PRODUCT_NOTES,
} from './constants.js'

export default class ProductRow extends Component {
  render() {
    const { rowData, rowDataId } = this.props;
    const totalPrice = rowData[PRODCUT_UNIT_PRICE].value * rowData[PRODUCT_QUANTITY].value;
    return (
      <div className='product-row'>
        <input
          style={{
            width: '113px',
            marginRight: '10px'
          }}
          className={cx({ error: rowData[PRODUCT_ID].error && rowData[PRODUCT_ID].hasBlurred })}
          type='number'
          value={rowData[PRODUCT_ID].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_ID
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_ID
          })}
        />
        <input
          style={{
            width: '185px',
            marginRight: '10px'
          }}
          className={cx({ error: rowData[PRODUCT_NAME].error && rowData[PRODUCT_NAME].hasBlurred })}
          value={rowData[PRODUCT_NAME].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_NAME
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_NAME
          })}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          className={cx({ error: rowData[PRODUCT_QUANTITY].error && rowData[PRODUCT_QUANTITY].hasBlurred })}
          type='number'
          value={rowData[PRODUCT_QUANTITY].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_QUANTITY
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_QUANTITY
          })}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          type='number'
          className={cx({ error: rowData[PRODCUT_UNIT_PRICE].error && rowData[PRODCUT_UNIT_PRICE].hasBlurred })}
          value={rowData[PRODCUT_UNIT_PRICE].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: rowDataId,
            elem: PRODCUT_UNIT_PRICE
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: rowDataId,
            elem: PRODCUT_UNIT_PRICE
          })}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          type='number'
          disabled
          value={totalPrice.toFixed(2)}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          className={cx({ error: rowData[PRODUCT_NOTES].error && rowData[PRODUCT_NOTES].hasBlurred })}
          value={rowData[PRODUCT_NOTES].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_NOTES
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: rowDataId,
            elem: PRODUCT_NOTES
          })}
        />
        <div
          className='delete-btn'
          style={{ width: '80px', padding: '5px 10px' }}
          onClick={() => {
            this.props.deleteProductRow({
              keyToDelete: rowDataId
            });
          }}
        >
          DELETE
        </div>
      </div>
    )
  }
}
