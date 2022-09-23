import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

export const Main = styled.div`
  margin: 100px 90px;
  width: 87vw;
  display: flex;
  justify-content: space-between;
`;

export const endereçosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
  width: 550px;
`;

export const Endereço = styled.div<propsTheme>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
  background-color: ${props => props.dark ? '#000' : '#fff'};
  width: 240px;
  height: 100px;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;

  &:target{
    border: 2px solid purple;
  }

  img{
    width: 20px;
    height: 20px;
    cursor: pointer;
    padding: 3px;
    background-color: white;
    border-radius: 50%;
  }

  h3{
    display: flex;
    justify-content: space-between;
  }
`;

export const novoEndereço = styled.div<propsTheme>`
background-color: ${props => props.dark ? '#000' : '#fff'};
color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;

h1{
  align-self: center;
}
`;
export const buscarCep =  styled.button<propsTheme>`
  background-color: #D2B48C;
  color: ${props => props.dark ? '#fff' : '#000'};
  border: none;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;

`;

export const newTop = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  button{
    height: 20px;
  }
`;

export const newMid = styled.div`
  display: flex;
  gap: 10px;
`;

export const newBot = styled.div`
  display: flex;
  gap: 10px;
`;

export const Salvar = styled.button<propsTheme>`
  padding: 7px;
  font-weight: bold;
  background-color: #D2B48C;
  color: ${props => props.dark ? '#fff' : '#000'};
  border: none;
  cursor: pointer;
  border-radius: 30px;
`;