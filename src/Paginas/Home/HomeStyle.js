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

  p{
    font-size: 1.1rem;
  }

  .BotaoLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    margin-right: 60px;
    transition: all 200ms;
    font-weight: 700;
    height: 60px;
    width: 100px;


    :hover{
      background-color: rgb(19, 145, 197);
      font-size: 1.1rem;
    }
  }

  .Titulo {
    display: flex;
    flex-flow: column wrap;
  }

  .introducao {
    margin-top: 25px;
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
    width: 90px;
    height: 90px;
  }

  .Aplicacao {
    margin-top: 25px;
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
    margin-top: 25px;
  
    div {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    a {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 1.3rem;
      background-color: #111;
      width: 225px;
      height: 45px;
      border-radius: 10px;
      color: #FFF;
      font-weight: 500;
      transition: all 200ms;
      :hover {
        transform: scale(1.1);
        color: #1391b1;
        font-weight: 700;
      }
    }
  }


  @media screen and (max-width: 480px){
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      max-width: 90vw;
    }

    .introducao{
      margin-top: 20px;
    }

    .Aplicacao{
      margin-top: 25px;
      width: 80vw;

      p{
        width: 50vw;
        font-size: 1rem;
      }
    }

    .Cadastro{
      margin-top: 25px;
      margin-bottom: 20px;
      div{
        margin-right: 25px;
      }
    }

    .svgIcons{
      height: 60px;
      width: 60px;
    }

    h2{
      font-size: .9rem;
    }

    .BotaoLogin{
      width: 60px;
    }


  }
`;
