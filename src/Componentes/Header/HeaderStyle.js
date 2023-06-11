import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  background: #1371dd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  overflow-x: hidden;

  h1{
    margin: 0;
    color: whitesmoke;
    margin-left: 20px;
  }

  a{
    text-decoration: none;
    margin-right: 50px;
    color: whitesmoke;
    transition: transform 300ms;
    :hover{
      transform: scale(1.1);
      font-weight: 700;
    }
  }

  .userActions{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 50px;
    color: #fff;
  }

`