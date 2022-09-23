import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-width: 20px;
    max-height: 20px;
  }
  span{
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  input{
    border-radius: 15px;
    border: none;
    padding: 10px 5px;
    
    &:focus{
      outline: none;
    }
  }
`;

export const areaSearch = styled.div`
    background-color: #b6905f;
    opacity: .9;
    padding: 20px 10px;
    width: 88vw;
    display: flex;
    justify-content: space-between;
`;