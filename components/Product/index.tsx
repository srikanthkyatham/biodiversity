import Image from "next/image"
import dynamic from "next/dynamic"

const ReactWaterMark = dynamic(
  () => import('react-watermark-component'),
  { ssr: false }
)

const Product = ({ product = {
  categories: '',
  name: 'Albac',
  title: 'Albac',
  mainImage: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
  authorImage: '',
  divCatNo: '123',
  casNo: '12341',
  molF: '1231412',
  molWt: '5123123',
  inventoryStatus: '141212',
  productOverview: '412451351',
  technicalData: '1523123',
  reference: '1234'
} }) => {

  console.log(product)

  const options = {
    chunkWidth: 480,
    chunkHeight: 200,
    textAlign: "middle",
    textBaseline: "bottom",
    globalAlpha: 1,
    font: "44px Microsoft Yahei",
    rotateAngle: -0.26,
    fillStyle: "#f00"
  }

  return (
    <div className='w-80 border border-slate-600 rounded-sm'>
      <p className="w-full text-white brand-bg-red-color text-center px-1 py-1">{product.name}</p>
      <ReactWaterMark waterMarkText="BioDiversity" options={options}>
        <Image
        src={product.mainImage}
        alt={product.title}
        width={297}
        height={126}
        />
      </ReactWaterMark>
      <ul className="list-none px-5 py-5">
        <li className="flex">
          <p className="w-20">CAT No:</p>
          <p>{product.divCatNo}</p>
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