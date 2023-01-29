import React from "react";
import Product from "../Product";

const ProductsOfFamily = ({ products = [], error = "" }) => {
  if (error === "") {
    console.log(error);
  }

  return (
    <div className="px-5 py-5w-5/6 m-auto md:w-11/12 mt-5">
      <div className="flex justify-center">
        <Product product={products[0]} />
      </div>
      <div className="flex flex-col align-center md:flex-row flex-wrap md:justify-start">
        {products.slice(1).map((item, index) => (
          <Product key={index.toString()} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsOfFamily;
