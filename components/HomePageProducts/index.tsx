import { useState, useEffect } from 'react'
import Product from '../Product'
import { fetchProducts } from '../../utils/productsReducer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const HomePageProducts = () => {

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true
  }

  const [products,setProducts] = useState([])

  const filterProducts = async () => {
    const response = await fetchProducts()
    if(response.length > 0) {
      const randomValue = Math.floor(Math.random() * (response.length - 10 - 1 + 1)) + 1
      fetch('/api/fetchProducts', {
        method: 'POST',
        body: JSON.stringify(response.slice(randomValue,randomValue + 10)),
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
  }

  useEffect(() => {
    setTimeout(() => filterProducts(),1000)
  }, [])

  return (
    <>  
      {products.length > 0 && (
        <div className="px-5 py-9 products-bg-color products flex flex-col justify-center align-center" id="products">
          <h2 className='sub-heading text-center'>Products</h2>
          <div style={{ width: 'calc(80vw)', marginLeft: 'auto', marginRight: 'auto' }}>
            <Slider
              {...settings}
            >
                {
                  products.map((item,index) => (<div key={index.toString()}><Product product={item} /></div>))
                }
            </Slider>
          </div>
          
      </div>
      )}
    </>
  );
}

export default HomePageProducts