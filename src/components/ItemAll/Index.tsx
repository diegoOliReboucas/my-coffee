import {Teste} from '../Teste'
import React from 'react'
import {setTitle, setImg, setPrice, setDesc, setOpen, setId} from '../Redux/reducers/modalReducer'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import * as C from './Styled'
import pie from '../../assets/pie.png'
import donut from '../../assets/donut.png'
import salg from '../../assets/salg.png'
import coffee from '../../assets/coffee.png'
import menu from '../../assets/menu.png'

export const ItemAll = () => {
  const [clicks, setClicks] = React.useState('all')
  const modal = useAppSelector(state => state.modal)
  const search = useAppSelector(state => state.search)
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const itensFiltrados = Teste.filter((item) => item.title.toLocaleLowerCase().includes(search.search.toLocaleLowerCase()))

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setId(e.currentTarget.children[1].children[3].innerHTML))
    dispatch(setImg(e.currentTarget.children[0].getAttribute('src')))
    dispatch(setTitle(e.currentTarget.children[1].children[0].innerHTML))
    dispatch(setPrice(parseFloat(e.currentTarget.children[1].children[1].innerHTML.substring(3))))
    dispatch(setDesc(e.currentTarget.children[1].children[2].innerHTML))
    dispatch(setOpen(true))
  }

  return (
    <C.Main dark={theme.dark}>
    <C.buttonItem dark={theme.dark}>
    <div onClick={() => setClicks('all')}><img src={menu} alt="menu image" /></div>
    <div onClick={() => setClicks('coffee')}><img src={coffee} alt="coffee image" /></div>
    <div onClick={() => setClicks('pie')}><img src={pie} alt="pie image" /></div>
    <div onClick={() => setClicks('donut')}><img src={donut} alt="donut image" /></div>
    <div onClick={() => setClicks('salg')}><img src={salg} alt="salgado image" /></div>
    </C.buttonItem>

    <C.divMain>
      {clicks !== 'all' ? itensFiltrados.filter((item) => item.type === clicks).map((item) => (
        <C.divItem dark={theme.dark} key={item.id} onClick={handleClick}>
        <img src={item.img} alt="" />
        <div>
        <h4>{item.title}</h4>
        <h5>R$ {item.price}</h5>
        <h5>{item.desc.length > 36 ? item.desc.substring(0, 36)+' ...' : item.desc}</h5>
        <h6>{item.id}</h6>
        </div>
      </C.divItem>
      )) : itensFiltrados.filter((item) => item.id < 50).map((item) => (
        <C.divItem dark={theme.dark} key={item.id} onClick={handleClick}>
        <img src={item.img} alt="" />
        <div>
        <h4>{item.title}</h4>
        <h5>R$ {item.price}</h5>
        <h5>{item.desc.length > 36 ? item.desc.substring(0, 36)+' ...' : item.desc}</h5>
        <h6>{item.id}</h6>
        </div>
      </C.divItem>
      ))}
    </C.divMain>
    </C.Main>
  )
}