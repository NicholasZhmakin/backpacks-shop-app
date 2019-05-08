import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleContainer className="row">
      <div className="col-12 my-4">
        <h1>{title}</h1>
      </div>
    </TitleContainer>
  );
};
export default Title;

const TitleContainer = styled.div`
  h1 {
    font-family: "Parisienne", cursive;
    color: var(--mainWhite);
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 0.6rem;
    text-align: center;
  }
  h1::first-letter {
    text-transform: capitalize;
  }
`;
