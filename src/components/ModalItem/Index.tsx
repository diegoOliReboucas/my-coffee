import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setQuant, setOpen } from "../Redux/reducers/modalReducer";
import { setCarTitle, setCarPrice, setCarImg, setCarQuant, setCarTotal } from "../Redux/reducers/carrinhoReducer";
import { add } from "../Redux/reducers/carReducer";

export const ModalItem = () => {
  const modal = useAppSelector(state => state.modal)
  const carrinho = useAppSelector(state => state.car)
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(setQuant(modal.quant + 1))
  }
  const handleMinus = () => {
    if(modal.quant > 1)
    dispatch(setQuant(modal.quant - 1))
  }

  const closeModal = () => {
    dispatch(setOpen(false))
  }
  const addItem = () => {
    dispatch(setOpen(false))
    dispatch(setQuant(1))
    dispatch(setCarTitle(modal.title))
    dispatch(setCarPrice(modal.price))
    dispatch(setCarImg(modal.img))
    dispatch(setCarQuant(modal.quant))

      dispatch(add({id: modal.id, name: modal.title, img: modal.img, price: modal.price, quant: modal.quant}))
      dispatch(setCarTotal(carrinho.carTotal + (modal.price * modal.quant))) 
  }

  return (
    <C.OutModal openModal={modal.open}>
    <C.Modal dark={theme.dark}>
      <C.Infos>
      <C.Img src={modal.img} alt="" />
      <C.RightSide>
        <C.RightSideTop>
        <h2>{modal.title}</h2>
        <p>{modal.desc}</p>
        </C.RightSideTop>
        <C.RightSideBottom>
          <C.QuantButtons dark={theme.dark}>
            <button onClick={handlePlus}>+</button>
            <h4>{modal.quant}</h4>
            <button onClick={handleMinus}>-</button>
          </C.QuantButtons>

          <span>R$ {modal.price * modal.quant}</span>
        </C.RightSideBottom>
      </C.RightSide>
      </C.Infos>
    <C.Buttons>
      <C.Button1 dark={theme.dark} small onClick={closeModal}>Cancelar</C.Button1>
      <C.Button1 dark={theme.dark} onClick={addItem}>Adicionar ao carrinho</C.Button1>
    </C.Buttons>
    </C.Modal>
    </C.OutModal>

  )
}