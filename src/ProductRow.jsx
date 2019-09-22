import React, { Component } from 'react'
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_QUANTITY,
  PRODCUT_UNIT_PRICE,
  PRODUCT_TOTAL_PRICE,
  PRODUCT_NOTES,
} from './constants.js'

export default class ProductRow extends Component {
  render() {
    const totalPrice = this.props.rowData[PRODCUT_UNIT_PRICE].value * this.props.rowData[PRODUCT_QUANTITY].value;
    return (
      <div className='product-row'>
        <input
          style={{
            width: '113px',
            marginRight: '10px'
          }}
          type='number'
          value={this.props.rowData[PRODUCT_ID].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_ID
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_ID
          })}
        />
        <input
          style={{
            width: '185px',
            marginRight: '10px'
          }}
          value={this.props.rowData[PRODUCT_NAME].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_NAME
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_NAME
          })}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          type='number'
          value={this.props.rowData[PRODUCT_QUANTITY].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_QUANTITY
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_QUANTITY
          })}
        />
        <input
          style={{
            width: '110px',
            marginRight: '10px'
          }}
          type='number'
          value={this.props.rowData[PRODCUT_UNIT_PRICE].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODCUT_UNIT_PRICE
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: this.props.rowDataId,
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
          value={this.props.rowData[PRODUCT_NOTES].value}
          onBlur={this.props.onBlurProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_NOTES
          })}
          onChange={this.props.onChangeProductRowElement({
            rowId: this.props.rowDataId,
            elem: PRODUCT_NOTES
          })}
        />
        <div
          className='delete-btn'
          style={{ width: '80px', padding: '5px 10px' }}
          onClick={() => {
            this.props.deleteProductRow({
              keyToDelete: this.props.rowDataId
            });
          }}
        >
          DELETE
        </div>
      </div>
    )
  }
}
