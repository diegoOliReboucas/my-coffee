import {createSlice} from '@reduxjs/toolkit'

type propEnd = {
  nome: string,
  rua: string,
  numero: number,
  cidade: string,
  estado: string
}
export const slice = createSlice({
  name: 'pedidoInfos',
  initialState: {
    pedidoTotal: 0,
    pedidoDesconto: 0,
    date: '',
    pedidoEnd: <propEnd>{}
  },
  reducers: {
    setPedidoTotal: (state, action) => {
      state.pedidoTotal = action.payload
    },
    setPedidoDesconto: (state, action) => {
      state.pedidoDesconto = action.payload
    },
    setDate: (state,action) => {
      state.date = action.payload
    },
    setPedidoEnd: (state, action) => {
      state.pedidoEnd = action.payload
    }
  }
});

export const {setPedidoTotal, setPedidoDesconto, setDate, setPedidoEnd} = slice.actions
export default slice.reducer