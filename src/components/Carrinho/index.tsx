import * as C from './Styled'
import React, { useEffect } from 'react'
import car from '../../assets/carrinho.png'
import lixeira from '../../assets/lixeira.png'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { del, clear } from '../Redux/reducers/carReducer'
import { pedidoAdd } from '../Redux/reducers/pedidoReducer'
import { setCarTotal, setDesc } from '../Redux/reducers/carrinhoReducer'
import {outrosPedidos} from '../Redux/reducers/outrosPedidosReducer'
import { setPedidoDesconto, setPedidoTotal, setPedidoEnd } from '../Redux/reducers/pedidoInfosReducer'
import { setEndOpen } from '../Redux/reducers/modalReducer'

export const Carrinho = () =>{
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const carrinho2 = useAppSelector(state => state.car2)
  const carrinho = useAppSelector(state => state.car)
  const ped = useAppSelector(state => state.outrosPedidos)
  const endereco = useAppSelector(state => state.endereco)
  const theme = useAppSelector(state => state.theme)
  const [cupom, setCupom] = React.useState('')

useEffect(() => {
  if(carrinho2.length === 0){
    setOpen(false)
  }
}, [carrinho2.length])
useEffect(() => {
  if(cupom === 'linkedin'){
    dispatch(setDesc(10))
  }else if(cupom === 'github'){
    dispatch(setDesc(8))
  }else {
    dispatch(setDesc(0))
  }
}, [cupom])

  const handleClick = () => {
    if(carrinho2.length > 0){
      setOpen(open === true ? false : true)
    }
  }

  const handleSubmit = () => {
    dispatch(setPedidoTotal(carrinho.carTotal))
    dispatch(setPedidoDesconto(carrinho.carDesc))
    dispatch(setPedidoEnd({nome: carrinho.carEnd.nome, rua: carrinho.carEnd.rua, numero: carrinho.carEnd.numero, cidade: carrinho.carEnd.cidade, estado: carrinho.carEnd.estado}))

    dispatch(pedidoAdd(carrinho2))
    dispatch(outrosPedidos({price: carrinho.carTotal, desc: carrinho.carDesc, nome: carrinho.carEnd.nome, rua: carrinho.carEnd.rua, numero: carrinho.carEnd.numero, cidade: carrinho.carEnd.cidade, estado: carrinho.carEnd.estado}))

    dispatch(clear(carrinho2))
    dispatch(setCarTotal(0))
  }

  const abrirEndereços = () =>{
    dispatch(setEndOpen(true))
  }

  return (
    <C.Main status={open}>
      <C.headerCar onClick={handleClick}>
      <img src={car} alt="" />
      <h3>Meu carrinho ({carrinho2.length})</h3>
      {open ? '🡣' : ''}
      </C.headerCar>

      <C.bodyMax>
       {carrinho2.map((item, index) => (
      <C.bodyCar key={index}>
         <C.leftSideCar>
         <C.Img src={item.img} />
         <C.infosCar>
           <h6>{item.name} ({item.quant})</h6>
           <p>R$ {item.price * item.quant}</p>
         </C.infosCar>
       </C.leftSideCar>

       <C.rightSideCar>
         <img src={lixeira} onClick={() => {
          dispatch(del(item.id));
          dispatch(setCarTotal(carrinho.carTotal - (item.price * item.quant)))
           }} />
       </C.rightSideCar>
      </C.bodyCar>
       ))}
      </C.bodyMax>
      <p style={{padding: '0 10px', fontWeight: 'bold', marginBottom: '5px'}}>Entrega</p>
      <C.Entrega dark={theme.dark}>
        {endereco.length > 0 ?
        <div>
          <p>{carrinho.carEnd.nome}</p>
          <p>{carrinho.carEnd.rua}, {carrinho.carEnd.numero}</p>
          <p>{carrinho.carEnd.cidade} - {carrinho.carEnd.estado}</p>
        </div>
        :
        <div>
       <p>Cadastre pelo menos um endereço</p>
       </div>
        }
        {endereco.length > 1 && 
        <button onClick={abrirEndereços}>Trocar</button>
        }
      </C.Entrega>

       <C.footerCar dark={theme.dark}>
        <C.Cupom>
        <p>Cupom de desconto</p>
        <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)}/>
        </C.Cupom>
        <p>desconto <span>{carrinho.carDesc} %</span></p>
        <p>total <span>R$ {(carrinho.carTotal - (carrinho.carTotal * carrinho.carDesc / 100)).toFixed(2)}</span></p>

        <button disabled={endereco.length > 0 ? false : true} onClick={handleSubmit}>Finalizar Compra</button>
       </C.footerCar>
    </C.Main>
  )
}