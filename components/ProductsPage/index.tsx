import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import dynamic from "next/dynamic"
import client from "../../client";
import { ProductType } from "../../types";

const WatermarkComponent = dynamic
  (import('../Watermark'),
  { ssr: false }
)
interface ProductsPageProps {
  product: ProductType;
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
        <WatermarkComponent product={product} />
        <div className="flex flex-col md:ml-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Div CAT No:
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.divCATNo}
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
                        Chemical Formula
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