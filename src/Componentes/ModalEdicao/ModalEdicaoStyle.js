import styled from "styled-components";

export const ModalEdicaoStyle = styled.div`

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #CCC;
  overflow: hidden;

  .save{
    align-self: center;
    width: 30%;
    height: 30px;
    border-radius: 10px 0 10px 0;
    border: solid black 1px;
    transition: all 200ms;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    background-color: whitesmoke;
    cursor: pointer;
    
    :hover{
      transform: scale(1.1);
    }
  }  

  .closeButton{
    position: fixed;
    bottom: 67%;
    right: 23%;
    border: none;
    transition: all 200ms;
    margin: 0;
    padding: 0;
    font-size: 2.1rem;
    color: red;
    background-color: #CCC;
    cursor: pointer;
    
    
    :hover{
      transform: scale(1.1);
    }
  }

  form{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 3vh;

    input{
      width: 28%;
    }

    textarea{
      width: 90%;
    }
  }

  @media screen and (max-width: 480px) {

    padding: 10px;

    textarea{
      width: 80vw;
    }

    label input{
      width: 100px;
    }

    .closeButton{
      top: 28%;
      right: 24%;
    }
  }

`

export const Icon = styled.div `
    .bookIcon{
      :hover{
        color: #daa520;
      }
    }

  @media screen and (max-width: 480px){
      .bookIcon{
        color: #daa520;
      }
    } 
  `