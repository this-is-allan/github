import styled, { css } from "styled-components";

const CardZoomEffect = css`
  &:hover {
    transform: scale(1.03, 1.03);
    &:after {
      opacity: 1;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  &:after {
    content: "";
    border-radius: .8rem;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 5px 0 rgb(192, 208, 230, 0.8);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: .8rem;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgb(192, 208, 230, 0.8);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${CardZoomEffect}

  .card-cover {
    position: relative;
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: .8rem .8rem 0 0;
    }
  }

  .card-title {
    display: block;
    color: ${({ theme }) => theme.font.color};
    font-size: 1rem;
    font-weight: 400;
    padding: .7rem .6rem;
  }
`
