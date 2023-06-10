import styled from "styled-components";

export const FooterStyle = styled.footer`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
margin: 0;
padding: 10px 0;
height: 90px;
width: 100%;
background-color: #111;
gap: 10px;

p{
  color: #fff;
  font-size: .7rem;
  margin: 0;
}

a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  color: #fff;
  background: #222;
  transition: all 500ms;
  
  :hover{
    background-color: #fff;
    color: #000;
    transform: scale(1.1);
  }
}

svg{
  font-size: 2.5rem; 
}


`