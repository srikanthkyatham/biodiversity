import { useState, useEffect } from 'react'
import Product from '../Product'
import { fetchProducts } from '../../utils/productsReducer'

const HomePageProducts = () => {

  const [products,setProducts] = useState([])

  const filterProducts = async () => {
    const response = await fetchProducts()
    fetch('/api/fetchProducts', {
      method: 'POST',
      body: JSON.stringify(response.slice(0,10)),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if(response.status === 200) {
        return response.json()
      }
      return []
    }).then(products => setProducts(products)).catch(error => console.log(error))
  }

  useEffect(() => {
    setTimeout(() => filterProducts(),1000)
  }, [])
  return (
    <>  
      {products && (
        <div className="px-5 py-9 products-bg-color products flex flex-col justify-center align-center" id="products">
        <h2 className='sub-heading text-center'>Products</h2>
        <div className='flex md:justify-center no-scrollbar' style={{ width: 'calc(80vw)', overflow: 'scroll', marginLeft: 'auto', marginRight: 'auto' }}>
          {
            products.map((item,index) => <Product key={index.toString()} product={item} />)
          }
        </div>
      </div>
      )}
    </>
  );
}

export default HomePageProducts