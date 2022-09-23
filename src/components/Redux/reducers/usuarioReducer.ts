import {createSlice} from '@reduxjs/toolkit'

type propsUsuario = {
  id: number,
  endNome: string,
  endRua: string,
  endNum: number,
  endBairro: string,
  endCidade: string,
  endEstado: string
}
export const slice = createSlice({
  name: 'novoEndereco',
  initialState: <propsUsuario[]>[],
  reducers: {
    novoEndereco(state, action){
    state.push(action.payload)
    },
    delEnd(state, action){
      return state = state.filter(({endNome}) => endNome !== action.payload)
      }
  }
});

export const {novoEndereco, delEnd} = slice.actions
export default slice.reducer