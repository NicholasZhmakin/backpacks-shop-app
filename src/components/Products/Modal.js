import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions/closeModal";

const Modal = props => {
  const { img, title, price } = props.modalProduct;
  if (!props.modalOpen) {
    return null;
  } else {
    return (
      <ModalContainer className="container">
        <div className="row">
          <div id="modal" className="col-6 mx-auto p-4">
            <h5>Item added to the cart</h5>
            <img src={img} className="fluid" alt="backpack" />
            <h5>{title}</h5>
            <h5 className="text-muted">price : $ {price}</h5>
            <Link to="/">
              <ButtonContainer
                onClick={() => {
                  props.closeModal();
                }}
              >
                back to store
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer
                store
                onClick={() => {
                  props.closeModal();
                }}
              >
                open cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </ModalContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    modalProduct: state.shop.modalProduct,
    modalOpen: state.shop.modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

Modal.propTypes = {
  modalProduct: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  #modal {
    background: var(--mainWhite);
    border: 1rem double var(--mainGreen);
    font-family: "Graduate", cursive;
    text-transform: capitalize;
    text-align: center;
  }
  img {
    width: 100%;
    height: 25em;
    object-fit: contain;
  }
`;
