import * as C from './Styled'
import { useAppSelector } from "../Redux/hooks/useAppSelector"


export const OutrosPedidos = () => {
  const outrosPedidos = useAppSelector(state => state.outrosPedidos)
  const pedidoInfos = useAppSelector(state => state.pedidoInfos)
  const theme = useAppSelector(state => state.theme)

  return (
    <C.Main>
      {outrosPedidos.slice(1).map((item, index) => (
         <C.pedidoContainer dark={theme.dark} key={index}>
         <C.Top>
           <p>{pedidoInfos.date} <span>Recebido</span></p>
         </C.Top>
 
         <C.Body>
           <C.bodyLeft>
             <p>{item.nome}</p>
             <p>{item.rua}, {item.numero}</p>
             <p>{item.cidade} - {item.estado}</p>
           </C.bodyLeft>
 
           <C.bodyRight>
             <h3>R$ {(item.price - (item.price * item.desc / 100)).toFixed(2)}</h3>
           </C.bodyRight>
         </C.Body>
       </C.pedidoContainer>
      ))}

    </C.Main>
  )
}