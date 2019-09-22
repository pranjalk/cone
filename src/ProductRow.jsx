import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <div className='product-row'>
        <input style={{ width: '113px', marginRight: '10px' }}/>
        <input style={{ width: '185px', marginRight: '10px'  }}/>
        <input style={{ width: '110px', marginRight: '10px'  }}/>
        <input style={{ width: '110px', marginRight: '10px'  }}/>
        <input style={{ width: '110px', marginRight: '10px'  }}/>
        <input style={{ width: '110px', marginRight: '10px'  }}/>
        <div className='delete-btn' style={{ width: '80px', padding: '5px 10px' }}>
          DELETE
        </div>
      </div>
    )
  }
}
