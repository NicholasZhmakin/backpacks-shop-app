import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showDetails } from "../../actions/showDetailsActions";
import { openModal } from "../../actions/modalActions/openModal";
import { addToCart } from "../../actions/cartActions/addToCart";
import { addTotals } from "../../actions/cartActions/addTotals";

const Product = props => {
  const { id, title, img, category, price, inCart } = props.product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        {/* card badge */}
        <span className="badge p-1">{category}</span>
        {/* card img */}
        <div
          className="img-container p-4 my-auto"
          onClick={() => props.showDetails(id)}
        >
          <Link to="/details">
            <img src={img} alt="backpack" className="card-img" />
          </Link>
          {/* card button-icon */}
          <button
            className="card-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              props.addToCart(id);
              props.openModal(id);
              props.addTotals();
            }}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center my-auto">{title}</p>
          <h5 className="my-auto ml-2">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showDetails: id => dispatch(showDetails(id)),
    openModal: id => dispatch(openModal(id)),
    addToCart: id => dispatch(addToCart(id)),
    addTotals: () => dispatch(addTotals())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.boolean
  }).isRequired
};

const ProductWrapper = styled.div`
  &:hover .card {
    box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.5);
    transform: scale(1.1, 1.1);
  }
  .card {
    transition: all 0.2s linear;
  }
  .card-footer {
    height: 4rem;
    font-family: "Graduate", cursive;
    text-transform: capitalize;
    text-align: center;
  }

  .card-footer h5 span {
    color: var(--lightGreen);
    font-weight: bold;
  }
  .badge {
    position: absolute;
    top: 0;
    left: 0;
    text-transform: capitalize;
    color: var(--mainWhite);
    background: var(--lightGreen);
  }
  .img-container {
    position: relative;
    overflow: hidden;
    height: 16rem;
  }
  .card-img {
    transition: all 0.2s linear;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1rem 0.1rem;
    background: var(--mainWhite);
    border: none;
    outline: none;
    color: var(--lightBlue);
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
  }
  .card-btn i {
    font-size: 2.2rem;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
  .card-btn:hover {
    color: var(--mainGold);
    cursor: pointer;
  }
`;
