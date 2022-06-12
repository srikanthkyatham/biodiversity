import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image"
import dynamic from "next/dynamic"
import client from "../../client";
import { ProductType } from "../../types";
import { Watermark } from '@hirohe/react-watermark';
import Config from '../../app.json'

interface ProductsPageProps {
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

const ProductsPage = ({ product }: ProductsPageProps) => {

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
    <div className='w-5/6 m-auto md:w-11/12 mt-5'>
      <h2 className='text-center text-red-500 text-3xl'>{product.title}</h2>
      <div className='flex flex-col justify-center mt-5 md:flex-row'>
      <ReactWaterMark waterMarkText={Config.watermark_text} options={options}>
        <Image
          src={product.mainImage ? urlFor(product.mainImage).width(50).url() : '/services1.jpg'}
          alt={product.title}
          width={297}
          height={126}
        />
      </ReactWaterMark>
        <div className="flex flex-col md:ml-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        CAT No:
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.divCatNo}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CAS No:
                        </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.casNo}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mol.F.
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.molF}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mol.wt.
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.molWt}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Inv. Status
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.inventoryStatus}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Product Overview
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.productOverview}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Technical Data
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.technicalData}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Reference
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.reference}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage