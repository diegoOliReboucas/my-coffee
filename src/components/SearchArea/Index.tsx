import * as C from './Styled'
import searchImg from '../../assets/search.png'
import React, { HtmlHTMLAttributes, useEffect, useRef } from 'react'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { setSearch } from "../Redux/reducers/searchReducer"
import { useDispatch } from "react-redux"
import { Teste } from '../Teste'

export const SeatchArea = () => {
  const [visib, setVisib] = React.useState(false)
  const [busca, setBusca] = React.useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const search = useAppSelector(state => state.search)
  
  const itensFiltrados = Teste.filter((item) => item.title.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
   
  const handleCLick = () => {
    if(visib === false){
      setVisib(true)
      setTimeout(() => {
        refInput.current?.focus()
      }, 100);
    }
  }
  const clickOut = () => {
    if(search.search.length === 0)
    if (visib === true){
      setTimeout(() => {
        setVisib(false)
      }, 500);
    }
  }


  return (
    <C.Main>
      <C.areaSearch>
        <h1>myCoffee</h1>
        <span onClick={handleCLick}>
        <img src={searchImg} alt="" />
        {visib ? <input type="text" value={search.search} onChange={(e) => dispatch(setSearch(e.target.value))} ref={refInput} onBlur={clickOut} /> : ''} 
        </span>
      </C.areaSearch>
    </C.Main>
  )
}