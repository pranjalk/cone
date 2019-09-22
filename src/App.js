import React from 'react';
import './App.css';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
import ProductForm from './ProductForm';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <div className='upper-form'>
          <BillingAddress/>
          <ShippingAddress/>
        </div>
        <div>
          <ProductForm/>
        </div>
        <div className='o-flex' style={{ padding: '10px', justifyContent: 'flex-end' }}>
          <div className='action-btn' style={{ float: 'right' }} >
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
