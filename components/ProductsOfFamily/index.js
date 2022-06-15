import React from 'react';
import Product from '../Product'

const ProductsOfFamily = ({ products = [], error = '' }) => {

  console.log(products, error)
  
  return (
  <div className='px-5 py-5w-5/6 m-auto md:w-11/12 mt-5'>
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