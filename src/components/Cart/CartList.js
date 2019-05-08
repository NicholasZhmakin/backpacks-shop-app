import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  return (
    <div className="container-fliud">
      {cart.map(product => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartList;
