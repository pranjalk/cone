import React, { PureComponent } from 'react'
import ProductFormHeader from './ProductFormHeader'
import ProductRow from './ProductRow'

export default class ProductForm extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <div className='lower-form'>
        <ProductFormHeader/>
        <ProductRow/>
        <div className='o-flex' style={{ padding: '10px' }}>
          <div className='action-btn'>
            ADD PRODUCT
          </div>
        </div>
      </div>
    )
  }
}
