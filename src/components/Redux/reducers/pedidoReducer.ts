import {createSlice} from '@reduxjs/toolkit'

type propsItem = {
  identifier?: string,
  id: number,
  name: string,
  img: string,
  price: number,
  quant: number,
}
export const slice = createSlice({
  name: 'pedido',
  initialState: <propsItem[]>[],
  reducers: {
    pedidoAdd(state, action){
     return state = action.payload.map((item: HTMLElement) => item)
    },
  }
});

export const {pedidoAdd} = slice.actions
export default slice.reducer