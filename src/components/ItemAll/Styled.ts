import styled from 'styled-components'
import { propsTheme } from '../OutrosPedidos/Styled';


export const Main = styled.div<propsTheme>`
  margin-left: 70px;
  margin-top: 120px;
  position: absolute;
  color: ${props => props.dark ? '#FFEBCD' : '#B8860B'};

  img{
    max-width: 50px;
  }
`;

export const divMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 315px);
  max-height: 370px;
  overflow-y: scroll;
  gap: 15px;

  ::-webkit-scrollbar{
    width: 12px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:	#FAEBD7;
    border: 2px solid #D2B48C;
  }
`;

export const divItem = styled.div<propsTheme>`
    background-color: ${props => props.dark ? '#000' : '#fff'};
    max-width: 300px;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-radius: 2px;
    cursor: pointer;

    div{
      display: flex;
      flex-direction: column;
      
      h4, h5{
        margin: 0;
      }
      h6{
        display: none;
      }
    }

    img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    }
`;

export const itensMax = styled.div`
    /* background-color: pink; */

`;

export const buttonItem = styled.div<propsTheme>`
    margin-bottom: 15px;
    display: flex;
    gap: 15px;

    div{
      background-color: rgba(255, 255, 255, .5);
      height: 50px;
      width: 50px;
      border-radius: 5px;
      cursor: pointer;

      &:hover{
      background-color: ${props  => props.dark ? 'rgba(150, 150, 150)' : '#fff'};
    }
      
      img{
        height: 50px;
        width: 50px;
      }
    }
`;