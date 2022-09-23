import * as C from './Styled'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setDate } from '../Redux/reducers/pedidoInfosReducer'

export const PedidosItens = () =>{
  const dispatch = useDispatch()
  const carrinho = useAppSelector(state => state.car)
  const pedidos = useAppSelector(state => state.pedido)
  const pedidoInfos = useAppSelector(state => state.pedidoInfos)
  const theme = useAppSelector(state => state.theme)

  useEffect(() => {
    let data = new Date()
    console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
    dispatch(setDate(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`))
    
  },[])

  return (
    <C.Main dark={theme.dark}>
      <C.itens>
      {pedidos.map((item) => (
          <C.itensPedido key={item.id}>
          <C.leftSide>
            <C.img src={item.img} />
          </C.leftSide>
          <C.rightSide>
            <h5>{item.name}</h5>
            <p>R$ {item.price * item.quant}</p>
          </C.rightSide>
          </C.itensPedido>
      ))}
      </C.itens>

       <C.infosPedido>
        <C.infosTop>
          <p>Data do pedido: <span>{pedidoInfos.date}</span></p>
        </C.infosTop>
        <C.infosBottom>
          <h4>Endereço de Entrega:</h4>
          <p>{pedidoInfos.pedidoEnd.nome}</p>
          <p>{pedidoInfos.pedidoEnd.rua}, {pedidoInfos.pedidoEnd.numero}</p>
          <p>{pedidoInfos.pedidoEnd.cidade}, {pedidoInfos.pedidoEnd.estado}</p>
        </C.infosBottom>
       
       </C.infosPedido>

       <C.totalPedido>
        <p>Desconto <span>{pedidoInfos.pedidoDesconto} %</span></p>
        <p>Total <span>R$ {(pedidoInfos.pedidoTotal - (pedidoInfos.pedidoTotal * pedidoInfos.pedidoDesconto / 100)).toFixed(2)}</span></p>
       </C.totalPedido>
    </C.Main>
  
  )
}