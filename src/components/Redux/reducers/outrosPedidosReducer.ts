import {createSlice} from '@reduxjs/toolkit'

type propsOutros = {
  price: number, 
  desc: number,
  nome: string,
  rua: string,
  numero: number,
  cidade: string,
  estado: string
}
export const slice = createSlice({
  name: 'outrosPedidos',
  initialState: <propsOutros[]>[],
  reducers: {
    outrosPedidos(state, action){
    state.unshift(action.payload)
    },
  }
});

export const {outrosPedidos} = slice.actions
export default slice.reducer