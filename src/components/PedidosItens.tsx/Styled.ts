import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

export const Main = styled.div<propsTheme>`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
`;

export const itens = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 220px);
  grid-template-rows: repeat(1, 45px);
  gap: 5px;
  height: 140px;
  overflow-y: scroll; 

  ::-webkit-scrollbar{
 width: 18px;
}
  ::-webkit-scrollbar-thumb{
  background-color:	#D2B48C;
}
`;

export const itensPedido = styled.div`
  display: flex;
  gap: 7px;
  height: 45px;
`;

export const infosPedido = styled.div`
  margin-left: -30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const infosTop = styled.div`
  p{
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 3px;
    span{
      font-weight: normal;
    }
  }
`;
export const infosBottom = styled.div``;

export const totalPedido = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 50px;
  gap: 8px;

  p{
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    span{
      font-weight: normal;
    }
  }
`;

export const leftSide = styled.div``;

export const rightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const img = styled.img`
  width: 50px;
  height: 40px;
  background-color: black;
`;