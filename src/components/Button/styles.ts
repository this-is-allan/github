import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: .7rem .9rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  background: #fff;
  color: #575553;
  border-radius: .5rem;
  border: 2px solid #f3f1ee;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: stretch;
  justify-content: space-around;
  transition: border .2s cubic-bezier(.06,.67,.37,.99);
  appearance: none;

  &:hover {
    border: 2px solid #e6e4e1;
  }
`
