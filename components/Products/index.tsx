import Product from './Product'

const Products = () => {
  return (
    <div className="flex px-5 py-9 overflow-scroll products-bg-color products" id="products">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products