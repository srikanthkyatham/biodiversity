import dynamic from "next/dynamic"
import { ProductType } from '../../types'

const WatermarkComponent = dynamic
  (import('../Watermark'),
  { ssr: false }
)

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {

  return (
    <div className='w-80 mt-5 border border-slate-600 rounded-sm mr-5' style={{ minWidth: 300 }}>
      <p className="w-full text-white brand-bg-red-color text-center px-1 py-1">{product.title}</p>
      <WatermarkComponent product={product} />
      <ul className="list-none px-5 py-5">
        <li className="flex">
          <p className="w-20">DIV CAT No:</p>
          <p>{product.divCATNo}</p>
        </li>
        <li className="flex">
          <p className="w-20">CAS No:</p>
          <p>{product.casNo}</p>
        </li>
        <li className="flex">
          <p className="w-20">Mol.F.</p>
          <p>{product.molF}</p>
        </li>
        <li className="flex">
          <p className="w-20">Mol.wt.</p>
          <p>{product.molWt}</p>
        </li>
        <li className="flex">
          <p className="w-20">Inv. Status</p>
          <p>{product.inventoryStatus}</p>
        </li>
      </ul>
    </div>
  );
}

export default Product