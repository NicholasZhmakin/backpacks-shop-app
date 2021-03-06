import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
