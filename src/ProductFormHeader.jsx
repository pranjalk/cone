import React, { PureComponent } from 'react'

export default class ProductFormHeader extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <div className='lower-form-header'>
        <div style={{ width: '120px', marginRight: '10px' }}>
          Product ID
        </div>
        <div style={{ width: '190px', marginRight: '10px' }}>
          Product Name
        </div>
        <div style={{ width: '115px', marginRight: '10px' }}>
          Quantity
        </div>
        <div style={{ width: '115px', marginRight: '10px' }}>
          Unit Price
        </div>
        <div style={{ width: '115px', marginRight: '10px' }}>
          Total Price
        </div>
        <div style={{ width: '125px', marginRight: '10px' }}>
          Notes
        </div>
        <div style={{ width: '110px', marginRight: '10px' }}>
            --
        </div>
      </div>
    );
  }
}
