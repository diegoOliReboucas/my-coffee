import React, { useRef } from 'react'
import lixeira from '../../assets/lixeira.png'
import { Input } from '../Input/Index'
import * as C from './Styled'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { novoEndereco, delEnd } from '../Redux/reducers/usuarioReducer'
import { setCarEnd } from '../Redux/reducers/carrinhoReducer'

export const Usuario = () =>{
  const [nome, setNome] = React.useState('')
  const [cep, setCep] = React.useState('')
  const [rua, setRua] = React.useState('')
  const [bairro, setBairro] = React.useState('')
  const [num, setNum] = React.useState('')
  const [comp, setComp] = React.useState('')
  const [cidade, setCidade] = React.useState('')
  const [estado, setEstado] = React.useState('')
  const endereco = useAppSelector(state => state.endereco)
  const carrinho = useAppSelector(state => state.car)
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    dispatch(novoEndereco({endNome: nome, endRua: rua, endNum: num, endBairro: bairro, endCidade: cidade, endEstado: estado}))
    
    setNome('')
    setCep('')
    setRua('')
    setComp('')
    setBairro('')
    setCidade('')
    setEstado('')
    setNum('')

    dispatch(setCarEnd({nome: nome, rua: rua, numero: num, cidade: cidade, estado: estado}))
  }

  const buscarCep = async(e: React.FormEvent) => {
    e.preventDefault()
    try{
      let r = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
      let json = await r.json()

      setRua(json.logradouro)
      setComp(json.complemento)
      setBairro(json.bairro)
      setCidade(json.localidade)
      setEstado(json.uf)
    }catch{
      alert('Cep nao encontrado')
    }
  }

  return (
    <C.Main>
      <C.endereçosContainer>
      {endereco.map((item, index) => (
      <C.Endereço dark={theme.dark} key={index}>
      <h3>{item.endNome} <img onClick={() => {
        dispatch(delEnd(item.endNome))}} src={lixeira} alt="" /></h3>
      <p>Rua: {item.endRua}, {item.endNum}</p>
      <p>Bairro: {item.endBairro}</p>
      <p>{item.endCidade} - {item.endEstado}</p>
      </C.Endereço>
        ))}
      </C.endereçosContainer>

      <form onSubmit={handleSubmit}>
      <C.novoEndereço dark={theme.dark}>
        <h1>Cadastrar novo endereço</h1>
      <C.newTop>
        <Input label='Salvar como' id='tipo' type='text' value={nome} onChange={(e) => setNome(e.target.value)} required/>
        <Input label='Cep' id='cep' type='text' value={cep} onChange={(e) => setCep(e.target.value)}/>
        <C.buscarCep dark={theme.dark} onClick={buscarCep}>buscar</C.buscarCep>
      </C.newTop>

      <C.newMid>
      <Input label='Rua' id='rua' type='text' value={rua} onChange={(e) => setRua(e.target.value)} required/>
      <Input style={{width: '100px'}} label='Numero' id='num' type='number' value={num} onChange={(e) => setNum(e.target.value)} required/>
      <Input label='Complemento' id='comp' type='text' value={comp} onChange={(e) => setComp(e.target.value)}/>
      </C.newMid>

      <C.newBot>
      <Input label='Bairro' id='bairro' type='text' value={bairro} onChange={(e) => setBairro(e.target.value)} required/>
      <Input label='Cidade' id='cidade' type='text' value={cidade} onChange={(e) => setCidade(e.target.value)} required/>
      <Input label='Estado (UF)' id='estado' type='text' value={estado} onChange={(e) => setEstado(e.target.value)} required/>
      </C.newBot>
      <C.Salvar dark={theme.dark}>Salvar</C.Salvar>
      </C.novoEndereço>
      </form>
    </C.Main>
  )
}