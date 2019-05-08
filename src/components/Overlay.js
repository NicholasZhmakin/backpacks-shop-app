import React from "react";
import { connect } from "react-redux";

const Overlay = props => {
  return <div style={props.modal === true ? over : null} />;
};

const mapStateToProps = state => {
  return {
    modal: state.shop.modalOpen
  };
};

export default connect(mapStateToProps)(Overlay);

const over = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyontent: "center",
  background: "rgba(0, 0, 0, 0.8)",
  zIndex: "1"
};
