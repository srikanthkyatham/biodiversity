import dynamic from "next/dynamic";
import Link from "next/link";
import { ProductType } from "../../types";
import { productsNameFilter } from "../../utils/productsReducer";

const WatermarkComponent = dynamic(import("../Watermark"), { ssr: false });

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  if (!product) {
    return <></>;
  }

  return (
    <div
      className="w-80 mt-5 border border-slate-600 rounded-sm mr-5"
      style={{ minWidth: 300 }}
    >
      <Link href={`/product/${productsNameFilter(product.title)}`}>
        <p className="w-full text-white brand-bg-red-color text-center px-1 py-1">
          {product.title}
        </p>
      </Link>
      <div className="watermark-image">
        <WatermarkComponent product={product} />
      </div>
      <ul className="list-none px-5 py-5">
        <li className="flex">
          <p className="w-24">DIV CAT No:</p>
          <p>{product.divCATNo}</p>
        </li>
        <li className="flex">
          <p className="w-24">CAS No:</p>
          <p>{product.casNo}</p>
        </li>
        <li className="flex">
          <p className="w-24">Mol.F.</p>
          <p>{product.molF}</p>
        </li>
        <li className="flex">
          <p className="w-24">Mol.wt.</p>
          <p>{product.molWt}</p>
        </li>
        <li className="flex">
          <p className="w-24">Inv. Status</p>
          <p>{product.inventoryStatus}</p>
        </li>
      </ul>
    </div>
  );
};

export default Product;
