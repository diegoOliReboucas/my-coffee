import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

type propsOpenModal = {
  openModal?: boolean
}

export const OutModal = styled.div<propsOpenModal>`
  display: ${props => props.openModal ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.7);
  z-index: 100;
`;

export const Modal = styled.div<propsTheme>`
  background-color: ${props => props.dark ? '#000' : '#fff'};
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
  height: 250px;
  width: 480px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box ;
`;

export const Img = styled.img`
    width: 250px;
    height: 150px;
    border-radius: 10px;
`;

export const Infos = styled.div`
  display: flex;
  gap: 15px
`;
export const RightSideTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSideBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 175px;

  span{
    font-size: 1.3rem;
  }
`;

export const QuantButtons = styled.div<propsTheme>`
  display: flex;
  gap: 8px;

  button{
    height: 20px;
    width: 20px;
    background-color: transparent;
    color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
    border: 1px solid ${props => props.dark ? '#FFEBCD' : '#B8860B'};
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    width: 430px;
    height: 70px;
    justify-content: flex-end;
    align-items: flex-end;
`;

type propButton = {
  small?: boolean
}
export const Button1 = styled.button<propButton & propsTheme>`
  padding: ${props => props.small ? '5px' : '10px'};
  height: ${props => props.small ? '30px' : '40px'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #D2B48C;
  color: ${props => props.dark ? '#000' : '#fff'};
  font-weight: bold;
`;