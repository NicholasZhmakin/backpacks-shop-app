import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const Navbar = props => {
  return (
    <NavbarContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <div className="emblem">
          <img src="img/emblem.png" alt="emblem" className="card-img-top" />
        </div>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            our products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <span className="mr-2">
          <i className="fas fa-cart-plus" />
          <strong className="ml-2">{props.cart.length}</strong>
        </span>
      </Link>
    </NavbarContainer>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Navbar);

const NavbarContainer = styled.nav`
  background: var(--mainWhite);
  border-bottom: 7px double var(--mainGreen);
  .emblem {
    width: 2.3rem;
    height: 2.3rem;
  }
  a {
    text-decoration: none !important;
    color: var(--mainGreen) !important;
  }
  .nav-link {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: "Graduate", cursive;
    transition: all 0.2s linear;
    &:hover {
      color: var(--mainGold) !important;
    }
  }
  span i {
    font-size: 2rem;
    color: var(--mainBlack);
    transition: all 0.2s linear;
    &:hover {
      color: var(--mainGold);
    }
  }
`;
