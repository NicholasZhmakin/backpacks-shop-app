import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "../Overlay";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import { openModal } from "../../actions/modalActions/openModal";
import { addToCart } from "../../actions/cartActions/addToCart";
import { addTotals } from "../../actions/cartActions/addTotals";

const Details = props => {
  const {
    id,
    category,
    company,
    img,
    img2,
    info,
    price,
    size,
    title,
    inCart
  } = props.detailProduct;
  return (
    <React.Fragment>
      <Overlay />
      <DetailsContainer className="container mx-auto mt-5 p-5">
        {/* title */}
        <div className="row">
          <div className="col-12 mx-auto mt-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* product info*/}
        <div className="row">
          {/* product img */}
          <div className="col-sm-12 col-md-6 col-lg-3 mx-auto img-container">
            <img src={img} className="img-fluid" alt="backpack" />
          </div>
          {/* product text */}
          <DetailsInfo className="col-sm-12 col-md-12 col-lg-6 mx-auto p-5">
            <h4>
              price: <span>{price} </span>$
            </h4>
            <h4>
              size: <span>{size} </span>inch
            </h4>
            <h5>company: {company}</h5>
            <h5>category: {category}</h5>
            <h6>some info about product:</h6>
            <p>{info}</p>
            {/* buttons */}
            <div className="mt-5">
              <Link to="/">
                <ButtonContainer>back to store</ButtonContainer>
              </Link>
              <ButtonContainer
                store
                disabled={inCart ? true : false}
                onClick={() => {
                  props.addToCart(id);
                  props.openModal(id);
                  props.addTotals();
                }}
              >
                {inCart ? "in cart" : "add to cart"}
              </ButtonContainer>
            </div>
          </DetailsInfo>
          {/* product img2 */}
          <div className="col-sm-12 col-md-6 col-lg-3 mx-auto img-container">
            <img src={img2} className="img-fluid" alt="backpack" />
          </div>
        </div>
      </DetailsContainer>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    detailProduct: state.shop.detailProduct,
    modal: state.shop.modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(openModal(id)),
    addToCart: id => dispatch(addToCart(id)),
    addTotals: () => dispatch(addTotals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

Details.propTypes = {
  detailProduct: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    company: PropTypes.string,
    img: PropTypes.string,
    img2: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.number,
    inCart: PropTypes.boolean
  }).isRequired
};

const DetailsContainer = styled.div`
  background: var(--mainWhite);
  clip-path: polygon(50% 0%, 100% 10%, 100% 91%, 50% 100%, 0 90%, 0 10%);
  h1 {
    text-align: center;
    font-family: "Parisienne", cursive;
    font-size: 4.5rem;
    color: var(--mainGreen);
  }
  .img-container {
    height: 30rem;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DetailsInfo = styled.div`
  text-transform: capitalize;
  h4 {
    font-weight: bold;
  }
  span {
    color: var(--mainGold);
  }
  h5 {
    color: grey;
  }
  p {
    text-align: justify;
    font-size: 1.2rem;
  }
  div {
    text-align: center;
  }
`;
