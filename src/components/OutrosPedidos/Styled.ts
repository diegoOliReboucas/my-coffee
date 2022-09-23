import styled from "styled-components";

export type propsTheme = {
  dark?: boolean
}
export const Main = styled.div`
  margin-top: -20px;
  width: 84vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 180px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
  width: 18px;
}
  ::-webkit-scrollbar-thumb{
    background-color:	#FAEBD7;
    border: 2px solid #D2B48C;
}
`;

export const pedidoContainer = styled.div<propsTheme>`
  border-radius: 10px;
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};
  background-color: ${props => props.dark ? '#000' : '#fff'};
  max-width: 325px;
  height: 100px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 25px
`;

export const Top = styled.div`

  p{
    display: flex;
    justify-content: space-between;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const bodyLeft = styled.div``;

export const bodyRight = styled.div``;