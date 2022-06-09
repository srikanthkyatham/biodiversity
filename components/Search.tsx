/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from "react";
import { filterSimilarProducts } from '../utils/search'
type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
import { useRouter } from 'next/router'

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
    console.log(val);
    const response = await filterSimilarProducts(val.toLowerCase(), products, true).slice(0,10)
    setAvailableProducts(response)
    console.log('response', response, products)
  };

  const getProducts = async () => {
    fetch('/api/products').then(res => res.json()).then(products => setProducts(products))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const func: any = useCallback(
    debounce((string: string) => api(string), 2000),
    [products]
  );

  console.log(products,availableProducts)

  useEffect(() => {
    search && func(search);
  }, [search, func]);

  const changeHandler: ChangeEvent = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="sm:px-6 lg:px-8">
      <div className="relative border border-stone-500" style={{ maxWidth: 300 }} >
        <input type="text" className="h-14 pr-8 pl-5 focus:shadow focus:outline-none text-xl border border-stone-500" style={{ maxWidth: 300 }} 
        placeholder="Enter CAS No., Catalog No. Or Product Name" 
        value={search} onChange={changeHandler} />
        {
          availableProducts.length > 0 && 
          <ul className="absolute bg-white pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-xl py-5 border border-stone-500 overflow-scroll" 
          style={{ maxWidth: 300, maxHeight: 500, zIndex: 10000 }}>
            {
              availableProducts.map(item => <li className='px-1 py-2 border-b-2' onClick={() => router.push(`/product/${item.title}?family=false`)}>{item.title}</li> )
            }
          </ul>
        }
      </div>
    </div>
  );
};

export default Search;