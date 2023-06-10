import styled from "styled-components";

export const TodoStyle = styled.div`

margin-top: 15px;

  
ul{
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

.TodoDescription{
  margin-left: 5px;
}

.acoes{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  height: fit-content;

  svg{
    font-size: 2rem;
    color: #000;
    background-color: #fff;
    padding: 3px;
    border-left: solid #fff 1px;
    border-radius: 5px;
    cursor: pointer;
  }
}

.Times{
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  padding: 0 5px;
  font-size: .8rem;
  background-color: #fff;
  border-radius: 2px;
  color: #000;
  border-radius: 5px;
  margin-top: 4px;

  p{
    margin: 0;
  }
}

`