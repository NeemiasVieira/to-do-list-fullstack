import styled from "styled-components";

export const HomeStyle = styled.main`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  overflow-x: hidden; 
  min-height: calc(100vh - 110px);

  header{
    background-color: #1391b1;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: 100%;
    padding: 0 20px;
    align-items: center;
    height: 60px;
  }
  h1 {
    margin: 0;
    color: #fff;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: 800;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    color: #ccc;
    font-weight: 600;
  }

  .BotaoLogin {
    text-decoration: none;
    color: #fff;
    margin-right: 60px;
  }

  .Titulo {
    display: flex;
    flex-flow: column wrap;
  }

  .introducao {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    div {
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
    }
  }

  .svgIcons {
    width: 75px;
    height: 75px;
  }

  .Aplicacao {
    margin-top: 50px;
    display: flex;
    width: 60vw;
    max-width: 700px;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 50px;

    p {
      width: 30vw;
    }

    svg {
      font-size: 5rem;
    }
  }

  .Cadastro {
    margin-top: 50px;
  
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    a {
      text-decoration: underline;
      color: #000;
      font-weight: 500;
      :hover {
        color: #1391b1;
      }
    }
  }

  @media screen and (max-width: 480px){

    .Aplicacao{
      width: 100vw;

      p{
        width: 60vw;
      }
    }

    .Cadastro{
      div{
        margin-right: 25px;
      }
    }


  }
`;
