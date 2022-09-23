import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

type propsOpenModal = {
  openModal?: boolean
}
export const outModal = styled.div<propsOpenModal>`
  display: ${props => props.openModal ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.7);
`;

export const Main = styled.div<propsTheme>`
  background-color: ${props => props.dark ? '#fff' : '#000'};
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
  height: 300px;
  width: 400px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
  width: 18px;
}
  ::-webkit-scrollbar-thumb{
    background-color:	#FAEBD7;
    border: 2px solid #D2B48C;
}
`

export const Endereço = styled.div<propsTheme>`
  background-color: ${props => props.dark ? '#000' : '#fff'};
  border-radius: 10px;
  min-height: 90px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
`