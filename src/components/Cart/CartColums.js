import React from "react";
import styled from "styled-components";

const CartColums = () => {
  return (
    <CartColumsContainer className="container-fluid d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>quantitly</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>total</p>
        </div>
      </div>
    </CartColumsContainer>
  );
};

export default CartColums;

const CartColumsContainer = styled.div`
  p {
    text-align: center;
    text-transform: uppercase;
    color: var(--mainGreen);
    font-weight: bold;
    border-bottom: 2px solid var(--mainGold);
  }
`;
