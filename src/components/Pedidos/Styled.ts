import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

export const Main = styled.div`
  margin: 100px;
  width: 100vw;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const mainPedido = styled.div<propsTheme>`
  height: 250px;
  width: 84vw;
  border-radius: 10px;
  background-color: ${props => props.dark ? '#000' : '#fff'};
`;

export const pedidoStatus = styled.div`
  display: flex;
  padding: 20px 15px;
  justify-content: space-between;
`;

type propPedido = {
  corPedido?: boolean,
  corEnviado?: boolean,
  corEntregue?: boolean,
}
export const firstStatus = styled.div<propPedido>`
  height: 20px;
  width: 20px;
  background-color: ${props => props.corPedido ? '#D2B48C' : 'white'};
  border: 2px solid #D2B48C;
  border-radius: 50%;

  &::before{
    content: 'Pedido Recebido';
    position: absolute;
    font-weight: ${props => props.corPedido ? 'bold' : 'normal'};
    margin-top: 25px;
    color: ${props => props.corPedido ? '#D2B48C' : '#DEB887'};
  }

  &:after{
    content: '';
    height: 2px;
    width: 485px;
    background-color: ${props => props.corEnviado ? '#D2B48C' : 'bisque'};
    position: absolute;
    margin-top: 8px;
    margin-left: 23px;
  }
`;
export const secondStatus = styled.div<propPedido>`
  height: 20px;
  width: 20px;
  background-color: ${props => props.corEnviado ? '#D2B48C' : 'white'};
  border: 2px solid #D2B48C;
  border-radius: 50%;

  &::before{
    content: 'Pedido Enviado';
    position: absolute;
    margin-top: 25px;
    margin-left: -40px;
    color: ${props => props.corEnviado ? '#D2B48C' : '#DEB887'};
  }

  &:after{
    content: '';
    height: 2px;
    width: 485px;
    background-color: ${props => props.corEntregue ? '#D2B48C' : 'bisque'};
    position: absolute;
    margin-top: 8px;
    margin-left: 23px;
  }
`;
export const thirdStatus = styled.div<propPedido>`
  height: 20px;
  width: 20px;
  background-color: ${props => props.corEntregue ? '#D2B48C' : 'white'};
  border: 2px solid #D2B48C;
  border-radius: 50%;

  &::before{
    content: 'Pedido Entregue';
    position: absolute;
    margin-top: 25px;
    margin-left: -90px;
    color: ${props => props.corEntregue ? '#D2B48C' : '#DEB887'};
  }
`;

export const firstStatusLine = styled.div``;