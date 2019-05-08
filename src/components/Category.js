import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectAll } from "../actions/selectCategoryActions/selectAll";
import { selectCasual } from "../actions/selectCategoryActions/selectCasual";
import { selectHiking } from "../actions/selectCategoryActions/selectHiking";
import { selectLaptop } from "../actions/selectCategoryActions/selectLaptop";

const Category = ({ selectAll, selectCasual, selectHiking, selectLaptop }) => {
  return (
    <div className="row my-3 justify-content-center align-items-center">
      <div className="col col-md-2 col-sm-4">
        <FilterButton className="btn btn-warning" onClick={() => selectAll()}>
          all
        </FilterButton>
      </div>
      <div className="col col-md-2 col-sm-4">
        <FilterButton
          className="btn btn-warning"
          onClick={() => selectCasual()}
        >
          casual
        </FilterButton>
      </div>
      <div className="col col-md-2 col-sm-4">
        <FilterButton
          className="btn btn-warning"
          onClick={() => selectHiking()}
        >
          hiking
        </FilterButton>
      </div>
      <div className="col col-md-2 col-sm-4">
        <FilterButton
          className="btn btn-warning"
          onClick={() => selectLaptop()}
        >
          Laptop
        </FilterButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectAll: () => dispatch(selectAll()),
    selectLaptop: () => dispatch(selectLaptop()),
    selectCasual: () => dispatch(selectCasual()),
    selectHiking: () => dispatch(selectHiking())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Category);

export const FilterButton = styled.button`
  text-transform: capitalize;
  width: 6rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  background: transparent;
  border: 0.2rem double var(--mainWhite);
  color: var(--mainWhite) !important;
  border-radius: 0.2rem;
  padding: 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--mainGreen) !important;
  }
  &:focus {
    outline: none;
  }
`;
