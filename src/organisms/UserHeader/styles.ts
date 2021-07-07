import styled from "styled-components";

import sizes from "../../styles/medias";

export const UserHeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2.4rem;

  .main {
    &-items {
      display: flex;

      div:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  .owner {
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

  /* Mobile version */
  @media (max-width: ${sizes.mobile}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .owner {
      display: flex;
      justify-content: center;
      padding: 1.5rem 0;
      width: 100%;
    }
    
    .actions {
      display: flex;
      justify-content: center;
    }
  }
`;