import styled from "styled-components";

export const CadastroStyle = styled.main`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column wrap;
color: #fff;
min-height: calc(100vh - 110px);
background-image: linear-gradient(to bottom left, rgb(25, 145, 200), rgb(25, 165, 225));

form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: 400px;
  width: 350px;
  gap: 5px;
  border: solid #1391b1 2px;
  border-radius: 10px;
  background-color: rgba(0,0,0, 0.7);
}

button{
  margin-top: 10px;
  width: 220px;
  background-color: rgba(0,0,0, 0.9);
  border-radius: 5px;
  color: #fff;
  border: none;
  height: 30px;
  cursor: pointer;
  transition: all 200ms;

  :hover{
    transform: scale(1.04);
  }
}

.divInput{
  background-color: #fff;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  input, input:focus{
    height: 30px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    padding: 0 10px;
  }  

  svg{
    font-size: 1.5rem;
    padding: 9px 10px;
    background-color: #000;
  }
}

.login{
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: .8rem;

  p{
    margin: 0;
  }

  a{
    color: #fff;
  }
}

`