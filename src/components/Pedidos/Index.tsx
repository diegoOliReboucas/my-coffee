import React from "react"
import { OutrosPedidos } from "../OutrosPedidos/Index"
import { PedidosItens } from "../PedidosItens.tsx/Index"
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import * as C from './Styled'

export const Pedidos = () =>{
  const [pedidoRecebido, setPedidoRecebido] = React.useState(false)
  const [pedidoEnviado, setPedidoEnviado] = React.useState(false)
  const [pedidoEntregue, setPedidoEntregue] = React.useState(false)
  const theme = useAppSelector(state => state.theme)
  const pedidos = useAppSelector(state => state.pedido)
  const outrosPedidos = useAppSelector( state => state.outrosPedidos)

  const handlePedidoRecebido = () =>{
    if(pedidoRecebido){
      setPedidoRecebido(false)
      setPedidoEnviado(false)
      setPedidoEntregue(false)
    }else {
      setPedidoRecebido(true)
    }
  }
  const handlePedidoEnviado = () => {
    if(pedidoEnviado){
      setPedidoEnviado(false)
      setPedidoEntregue(false)
    }else {
      setPedidoEnviado(true)
      setPedidoRecebido(true)
    }
  }
  const handlePedidoEntregue = () => {
    if(pedidoEntregue){
      setPedidoEntregue(false)
    }else {
      setPedidoRecebido(true)
      setPedidoEnviado(true)
      setPedidoEntregue(true)
    }
  }

  return (
    <div>
      {pedidos.length > 0 &&
    <C.Main>
      <C.mainPedido dark={theme.dark}>
        <C.pedidoStatus>
          <C.firstStatus corEnviado={pedidoEnviado} corPedido={pedidoRecebido} onClick={handlePedidoRecebido}></C.firstStatus>
          <C.secondStatus corEntregue={pedidoEntregue}  corEnviado={pedidoEnviado} onClick={handlePedidoEnviado}></C.secondStatus>
          <C.thirdStatus corEntregue={pedidoEntregue} onClick={handlePedidoEntregue}></C.thirdStatus>
        </C.pedidoStatus>
        <PedidosItens />
      </C.mainPedido>
      {outrosPedidos.length > 1 &&
      <div>
      <p>Outros pedidos</p>
      <OutrosPedidos />
      </div>
      }
    </C.Main>
    }
    </div>
  )
}