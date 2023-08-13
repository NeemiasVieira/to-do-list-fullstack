import styled from "styled-components";

export const ModalCriacaoStyle = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 20px;

  .inputWithLabel{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 5px;
  }

  input[type="date"] {
    font-size: 1rem;
    width: 115px;
}

textarea{
  font-size: 1rem;
}

input[type="checkbox"]{
  font-size: 1rem;
}

.saveButton{
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #000 1px;
  font-size: 1.3rem;
  border-radius: 15px 0 15px 0;
  transition: all 200ms;
  background-color: #fff;
  width: 100px;
  height: 35px;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
}

  .closeButton{
    font-size: 2.1rem;
    border: none;
    position: fixed;
    top: 2%;
    left: 61%;
    transition: all 200ms;
    cursor: pointer;
    color: red;
    :hover{
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {
    textarea{
      width: 70vw;
    }

    .closeButton{
      font-size: 2.5rem;
      width: 5px;
      margin-left: 70px;
      top: 2%;
      right: 1%;
    }

    input[type="date"] {
    font-size: 1rem;
    width: 120px;
}

input[type="checkbox"]{
  margin-left: 20px;
  transform: scale(1.6)
}
    
  }

`

export const CreateButton = styled.div`

.createTodo{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #000 1px;
  font-size: 1.3rem;
  border-radius: 10px;
  transition: all 200ms;
  background-color: #fff;
  width: 200px;
  height: 30px;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  :hover{
    transform: scale(1.15);
  }
}

`

export const ModalEstilizado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`