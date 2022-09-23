import styled from "styled-components";
import { propsTheme } from "../OutrosPedidos/Styled";

export const headerMain = styled.div`
  position: absolute;
  align-items: flex-start;

`;
export const DarkLight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    padding: 5px;
    margin: 15px 8px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;

    img{
      width: 30px;
    }
`;

export const navMain = styled.nav<propsTheme>`
      height: 100vh;
      width: 50px;
      display: flex;
      background-color: #b6905f;
      opacity: .9;
      flex-direction: column;
      justify-content: center;
      align-items: center;

  img{
    width: 30px;
    height: 30px;
  }
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  ul li{
    background-color: rgba(255, 255, 255, .5);
    padding: 3px;
    width: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    &:hover{
      background-color: ${props  => props.dark ? 'rgba(150, 150, 150)' : '#fff'};
    }
  }
`;