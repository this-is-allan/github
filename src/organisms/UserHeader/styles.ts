import styled from "styled-components";

export const UserHeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2.4rem;

  .main {
    flex: 2;
    min-width: 0;

    &-items {
      display: flex;

      div:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  .owner {
    flex-direction: row-reverse;

    .avatar {
      border: 2px dashed #ef52d1;
      border-radius: 100%;
      height: 90px;
      width: 90px;
      
      img {
        border-radius: 100%;
        max-width: 100%;
        padding: 3px;
      }
    }
  }

  .actions {
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    a, button:not(:first-child) {
      margin-left: 10px;
    }
  }
`;