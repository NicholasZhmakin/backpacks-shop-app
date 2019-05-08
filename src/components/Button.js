import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--mainGreen);
  border-color: ${props =>
    props.store ? "var(--lightBlue)" : "var(--mainGreen)"};
  color: ${props => (props.store ? "var(--lightBlue)" : "var(--mainGreen)")};
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.store ? "var(--lightBlue)" : "var(--mainGreen)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
  &::first-letter {
    text-transform: capitalize;
  }
`;
