import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

type propsMain = {
  status?: boolean
}
export const Main = styled.div<propsMain>`
  color: #000;
  width: 250px;
  height: 500px;
  position: absolute;
  bottom: ${props => props.status === true ? '0' : '-465px'};
  border-radius: 10px 10px 0 0;
  right: 30px;
  background-color: #b6905f;
  align-items: center;
  transition: .3s;

  img{
    width: 20px;
    height: 20px;
  }
`;

export const headerCar = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
`;

export const bodyCar = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;

  img{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }`;
export const bodyMax = styled.div`
height: 190px;
overflow-y: scroll;

::-webkit-scrollbar{
 width: 18px;
}
::-webkit-scrollbar-thumb{
  background-color:	#FAEBD7;
    border: 2px solid #D2B48C;
}
`;

export const leftSideCar = styled.div`
  display: flex;
  gap: 10px;
`;
export const Img = styled.img`
  min-width: 40px;
  min-height: 40px;
  border-radius: 5px;
`;
export const infosCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.1rem;
`;
export const rightSideCar = styled.div`
  display: flex;
  gap: 8px;

  button{
    width: 50px;
    height: 20px;
  }
`;

export const footerCar = styled.div<propsTheme>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 13px;
  bottom: 10px;
  position: absolute;

  p{
    display: flex;
    justify-content: space-between;
  }

  button{
    width: 220px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: ${props => props.dark ? '#000' : '#fff'};
    color: ${props => props.dark ? '#fff' : '#000'};
    cursor: pointer;

    &:disabled{
      opacity: .5;
      cursor: initial;
    }
  }
`;
export const Cupom = styled.div`
 display: flex;
 gap: 5px;
 flex-direction: column;
 font-size: 1rem;

 input{
  padding: 5px;
  border-radius: 10px;
  border: none;
 }
`;

export const Entrega = styled.div<propsTheme>`
  display: flex;
  font-size: .9rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  button{
    padding: 3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color:  ${props => props.dark ? '#000' : '#fff'};
    color: ${props => props.dark ? '#fff' : '#000'};
  }
`;

export const endereçoCar = styled.div``;