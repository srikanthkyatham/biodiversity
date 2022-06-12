import { useState, useEffect } from 'react'
import Product from '../Product'
import { fetchProducts } from '../../utils/productsReducer'

const HomePageProducts = () => {

  const [products,setProducts] = useState([])

  const filterProducts = async () => {
    const response = await fetchProducts()
    fetch('/api/fetchProducts', {
      method: 'POST',
      body: JSON.stringify(response),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then(products => setProducts(products)).catch(error => setProducts([]))
  }

  useEffect(() => {
    setTimeout(() => filterProducts(),1000)
  }, [])
  return (
    <div className="px-5 py-9 overflow-scroll products-bg-color products" id="products">
      <h2 className='sub-heading text-center'>Products</h2>
      <div className='flex md:justify-center'>
        {
          products.map((item,index) => <Product key={index.toString()} product={item} />)
        }
      </div>
    </div>
  );
}

export default HomePageProducts