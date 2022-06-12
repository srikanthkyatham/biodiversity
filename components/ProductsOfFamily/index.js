import React from 'react';
import Product from '../Product'

const ProductsOfFamily = ({ products = [] }) => {

  const renderRow = ({ index, key, title }) => {
    
    return (
      <div key={key} style={{ width: 300, height: 200 }}>
        <Product product={products[index]} />
      </div>
    );
  }
  
  return (
  <div className='w-5/6 m-auto md:w-11/12 mt-5'>
    <div className='flex justify-center'>
      <Product product={products[0]} />
    </div>
      { 
      products.slice(1).map((item,index) => <Product key={index.toString()} product={item} />)
      }
  </div>
  )
}

export default ProductsOfFamily