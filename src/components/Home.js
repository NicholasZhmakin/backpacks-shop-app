import React from "react";
import ProductsList from "./Products/ProductsList";
import Title from "./Title";
import Category from "./Category";
import Overlay from "./Overlay";
import { connect } from "react-redux";

const Home = props => {
  return (
    <React.Fragment>
      <Overlay />
      <div className="container py-3">
        <Title title="backpacks" />
        <Category />
        <ProductsList products={props.products} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.shop.selectedProducts,
    modal: state.shop.modalOpen
  };
};

export default connect(mapStateToProps)(Home);
