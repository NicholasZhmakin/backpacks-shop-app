import React, { Component } from "react";
import Title from "../Title";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import styled from "styled-components";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { products, cart } = this.props;
    if (cart.length > 0) {
      return (
        <React.Fragment>
          <Title title="your cart" />
          <CartContainer className="container mx-auto p-4">
            <CartColums />
            <CartList cart={cart} />
            <CartTotals products={products} />
          </CartContainer>
        </React.Fragment>
      );
    } else {
      return <EmptyCart />;
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.shop,
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Cart);

const CartContainer = styled.div`
  background: var(--mainWhite);
`;
