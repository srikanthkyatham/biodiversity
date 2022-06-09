import { useRouter } from 'next/router'
import Product from '../../components/Product'

const ProductsPage = () => {
  
  console.log('here')
  const router = useRouter()
  const { family } = router.query
  
  console.log(family)
  return (
    <Product />
  );
}

export default ProductsPage