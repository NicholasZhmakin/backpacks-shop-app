import React, { Component } from "react";
import styled from "styled-components";
import { incrementValue } from "../../actions/cartActions/incrementValue";
import { decrementValue } from "../../actions/cartActions/decrementValue";
import { removeItem } from "../../actions/cartActions/removeItem";
import { addTotals } from "../../actions/cartActions/addTotals";
import { connect } from "react-redux";

class CartItem extends Component {
  render() {
    const {
      incrementValue,
      decrementValue,
      removeItem,
      addTotals,
      product
    } = this.props;
    const { id, title, img, price, total, count } = product;
    return (
      <CartItemContainer className="row my-4">
        <div className="col-10 m-auto col-lg-2">
          <img src={img} className="img-fluid" alt="backpack" />
        </div>
        <div className="col-10 m-auto col-lg-2">
          <span className="d-lg-none">product : </span> {title}
        </div>
        <div className="col-10 m-auto col-lg-2">
          <span className="d-lg-none">price : </span> {price} $
        </div>
        <div className="col-10 m-auto col-lg-2">
          <div className="d-flex justify-content-center">
            <span
              className="mx-2"
              onClick={() => {
                if (count === 1) {
                  removeItem(id);
                  addTotals();
                } else {
                  decrementValue(id);
                  addTotals();
                  this.forceUpdate();
                }
              }}
            >
              <i className="fas fa-minus-square" />
            </span>
            <span className="mx-2">{count}</span>
            <span
              className="mx-2"
              onClick={() => {
                incrementValue(id);
                addTotals();
                this.forceUpdate();
              }}
            >
              <i className="fas fa-plus-square" />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="col-10 m-auto col-lg-2">
          <div
            className="cart-icon"
            onClick={() => {
              removeItem(id);
              addTotals();
            }}
          >
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <strong>
            <span>{total.toFixed(2)}</span> $
          </strong>
        </div>
      </CartItemContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementValue: id => dispatch(incrementValue(id)),
    decrementValue: id => dispatch(decrementValue(id)),
    removeItem: id => dispatch(removeItem(id)),
    addTotals: () => dispatch(addTotals())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);

const CartItemContainer = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
  .fas {
    color: var(--mainGreen);
    font-size: 2rem;
  }
  strong span {
    color: red;
  }
`;
