import * as C from './Styled'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { setEndOpen } from "../Redux/reducers/modalReducer";
import { useDispatch } from "react-redux"
import { setCarEnd } from '../Redux/reducers/carrinhoReducer';

export const ModalEndereço = () => {
  const carrinho = useAppSelector(state => state.car)
  const endereco = useAppSelector(state => state.endereco)
  const modal = useAppSelector(state => state.modal)
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  return (
    <C.outModal openModal={modal.endOpen}>
    <C.Main dark={theme.dark}>
      {endereco.map((item, index) => (
      <C.Endereço dark={theme.dark} key={index} onClick={() => {
        dispatch(setEndOpen(false)); dispatch(setCarEnd({nome: item.endNome, rua: item.endRua, numero: item.endNum, cidade: item.endCidade, estado: item.endEstado}))
      }}>
      <h3>{item.endNome}</h3> 
      <p>Rua: {item.endRua}, {item.endNum}</p>
      <p>Bairro: {item.endBairro}</p>
      <p>{item.endCidade} - {item.endEstado}</p>
    </C.Endereço>
      ))}

    </C.Main>
    </C.outModal>

  )
}