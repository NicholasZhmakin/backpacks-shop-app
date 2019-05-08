import React from "react";
import styled from "styled-components";

const Default = props => {
  return (
    <DefaultContainer className="container">
      <div className="row">
        <div className="col-10 mx-auto pt-5">
          <h1>404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requester URL
            <span>{props.location.pathname} </span>
            was not found
          </h3>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Default;

const DefaultContainer = styled.div`
  font-family: "Graduate", cursive;
  text-transform: uppercase;
  text-align: center;
  color: var(--mainWhite);
  span {
    color: red;
  }
`;
