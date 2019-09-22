import React, { PureComponent } from 'react'
import ProductFormHeader from './ProductFormHeader'
import ProductRow from './ProductRow'
import productFormConnect from './connectwrappers/productFormConnect'

class ProductForm extends PureComponent {

  render() {
    const { productDetails } = this.props;
    return (
      <div className='lower-form'>
        <ProductFormHeader/>
        {
          Object.keys(productDetails.data).map((key) => {
            return (
              <ProductRow
                key={key}
                rowData={productDetails.data[key]}
                rowDataId={key}
                deleteProductRow={this.props.deleteProductRow}
                onBlurProductRowElement={this.props.onBlurProductRowElement}
                onChangeProductRowElement={this.props.onChangeProductRowElement}
              />
            );
          })
        }
        <div className='o-flex' style={{ padding: '10px' }}>
          <div className='action-btn' onClick={this.props.addProductRow}>
            ADD PRODUCT
          </div>
        </div>
      </div>
    )
  }
}


export default productFormConnect(ProductForm);
