import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearCart } from "../../actions/cartActions/clearCart";
import { addTotals } from "../../actions/cartActions/addTotals";
import { setProducts } from "../../actions/setProductsActions";
import { connect } from "react-redux";

const CartTotals = ({ products, clearCart, setProducts, addTotals }) => {
  const { cartSubTotal, cartTax, cartTotal } = products;
  return (
    <CartTotalsContainer className="mt-5">
      <div className="row justify-content-end">
        <div className="col-8 col-lg-4">
          <Link to="/">
            <button
              className="btn btn-warning px-4 my-4"
              type="button"
              onClick={() => {
                clearCart();
                setProducts();
                addTotals();
              }}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span>
              subtotal:
              <strong> {cartSubTotal.toFixed(2)} </strong>$
            </span>
          </h5>
          <h5>
            <span>
              tax:
              <strong> {cartTax} </strong>$
            </span>
          </h5>
          <h4>
            <span>
              total:
              <strong> {cartTotal.toFixed(2)} </strong>$
            </span>
          </h4>
        </div>
      </div>
    </CartTotalsContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart()),
    setProducts: () => dispatch(setProducts()),
    addTotals: () => dispatch(addTotals())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartTotals);

const CartTotalsContainer = styled.div`
  text-align: right;
  text-transform: capitalize;
  font-size: 1.3rem;
  strong {
    color: red;
  }
  button {
    font-size: 1.3rem;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
