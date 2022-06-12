import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image"
import dynamic from "next/dynamic"
import client from "../../client";
import Config from '../../app.json'

interface ProductType {
  categories: Array<string>;
  name: string;
  title: string;
  mainImage: string;
  authorImage: string;
  divCatNo: string;
  casNo: string;
  molF: string;
  molWt: string;
  inventoryStatus: string;
  productOverview: string;
  technicalData: string;
  reference: string;
}

interface ProductProps {
  product: ProductType;
}

interface ReactWaterMarkProps {
  waterMarkText: string;
  options: object;
}

const ReactWaterMark = dynamic<ReactWaterMarkProps>
  (import('react-watermark-component'),
  { ssr: false }
)

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

const Product = ({ product }: ProductProps) => {

  const options = {
    chunkWidth: 260,
    chunkHeight: 200,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 1,
    font: "24px Microsoft Yahei",
    fillStyle: "#f00"
  }

  return (
    <div className='w-80 mt-5 border border-slate-600 rounded-sm mr-5' style={{ minWidth: 300 }}>
      <p className="w-full text-white brand-bg-red-color text-center px-1 py-1">{product.title}</p>
      <ReactWaterMark waterMarkText={Config.watermark_text} options={options}>
        <Image
          src={product.mainImage ? urlFor(product.mainImage).width(50).url() : '/services1.jpg'}
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