import styled from "styled-components";

export const TodoStyle = styled.div`
  margin-top: 15px;

  ul {
    display: flex;
    width: 60vw;
    margin: 5px 0 0 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 15px;
    list-style: none;
    border: solid #000 2px;
    border-radius: 5px;
  }

  .TodoDescription {
    margin-left: 10px;
  }

  .trashIcon {
    :hover {
      color: red;
    }
  }

  .acoes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    height: fit-content;

    svg {
      font-size: 2rem;
      background-color: #fff;
      padding: 3px;
      border-left: solid #fff 1px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .Times {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    padding: 0 5px;
    font-size: 0.8rem;
    background-color: #fff;
    border-radius: 2px;
    color: #000;
    border-radius: 5px;
    margin-top: 4px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .acoes {
      flex-flow: column wrap;
      gap: 5px;
      padding: 10px 3px;
      border-left: solid #000 1px;

      button {
        border: none;
      }

      .trashIcon {
        color: red;
      }   
    }

    .Times {
      font-size: .9rem;
       flex-flow: column wrap;
       gap: 3px;
      }
      ul{
        width: 85vw;
        align-items: flex-start;
      }
      .TodoDescription{
        margin-top: 8px;
      }
  }
`;
