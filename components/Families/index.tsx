import { useState, useEffect } from 'react'
import { filterSimilarProducts } from '../../utils/search'
import { useRouter } from 'next/router'

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const Families = ({ families = [] }) => {

  const router = useRouter()
  const [currentAlphabet,setCurrentAlphabet] = useState('')
  const [availableProducts,setAvailableProducts] = useState<any[]>([])

  const selectAlphabet = async (alphabet: string) => {
    setCurrentAlphabet(alphabet)
    const response = await filterSimilarProducts(alphabet.toUpperCase(), families, true)
    setAvailableProducts(response)
  }

  useEffect(() => {
    selectAlphabet('A')
  }, [])

  console.log(currentAlphabet)

  const renderAlphabets = () => 
  <div className="flex flex-row px-5 overflow-hidden flex-wrap justify-center space-x-5">
    {
      alphabets.map((item,index) => 
        (
          <button 
            key={index.toString()} 
            className={currentAlphabet === item ? 'text-red-500 hover:text-red-500 text-3xl' : 'text-black hover:text-red-500 text-3xl'}
            onClick={() => selectAlphabet(item)}
          >
            {item}
          </button>
        )
      )
    }
  </div>

  const renderFamilyProducts = () => <div className="flex flex-row px-5 overflow-hidden flex-wrap justify-center space-x-5">
  {
    availableProducts.map((item,index) => 
      (
        <button 
          key={index.toString()} 
          className='w-52 px-1 py-1 bg-slate-100 border border-indigo-600 rounded-sm text-black'
          onClick={() => router.push(`/product/${item.title}`)}
        >
          {item.title}
        </button>
      )
    )
  }
</div>

  return <div className='mt-10 mb-10'>
    {renderAlphabets()}
    {renderFamilyProducts()}
  </div>
}

export default Families