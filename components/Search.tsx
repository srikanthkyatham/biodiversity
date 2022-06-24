/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from "react";
import { filterSimilarProducts } from '../utils/search'
type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
import { useRouter } from 'next/router'
import { fetchProducts, productsNameFilter } from '../utils/productsReducer'

const debounce = (func: any, delay: number) => {
  let setTimoutInstance: any;
  return function () {
    const args = arguments;
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    setTimoutInstance = setTimeout(() => func.apply({}, args), delay);
  };
};

interface Search {
  products: any
}

const Search: React.FC = () => {

  const router = useRouter()
  const [products,setProducts] = useState<any[]>([])
  const [search, setSearch] = useState<string>("");
  const [availableProducts,setAvailableProducts] = useState<any[]>([])

  const api = async (val: string) => {    
    const response = await filterSimilarProducts(val.toLowerCase(), products, true).slice(0,10)
    setAvailableProducts(response)
  };

  const getProducts = async () => {
    const response = await fetchProducts()
    setProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const func: any = useCallback(
    debounce((string: string) => api(string), 1000),
    [products]
  );

  useEffect(() => {
    search && func(search);
  }, [search, func]);

  const changeHandler: ChangeEvent = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const redirectToProducts = ( title: string) => {
    setSearch('')
    setAvailableProducts([])
    router.push(`/product/${productsNameFilter(title)}`)
  }

  return (
    <div className="xl:w-96">
      <div className="input-group relative flex flex-wrap items-stretch w-full">
        <div className="input-group relative flex flex-wrap items-stretch w-full">
          <input 
            value={search}
            onChange={changeHandler} 
            className="form-control relative flex-auto min-w-0 block px-3 pr-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
              border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none md:pr-3" 
            placeholder="Enter CAS No., Catalog No. Or Product Name"
            aria-label="Search"
            aria-describedby="button-addon2" 
          />
          <button style={{ position: 'absolute', right: 10, top: 8 }} onClick={() => {
            setSearch('')
            setAvailableProducts([])
          }
          }>X</button>
        </div>
        
        {
          availableProducts.length > 0 && 
          <ul className="absolute bg-white pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-xl py-5 border border-stone-500 no-scrollbar overflow-scroll w-full" 
          style={{ top: 37, maxHeight: 300, zIndex: 10000 }}>
            {
              availableProducts.map(item => <li className='px-1 py-2 border-b-2' onClick={() => redirectToProducts(item.title)}>{item.title}</li> )
            }
          </ul>
        }
    </div>
  </div>
  );
};

export default Search;