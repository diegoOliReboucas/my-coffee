import {createSlice} from '@reduxjs/toolkit'
import {useAppSelector} from '../hooks/useAppSelector'

type propsItem = {
  identifier?: string,
  id: number,
  name: string,
  img: string,
  price: number,
  quant: number,
}

export const slice = createSlice({
  name: 'car',
  initialState: <propsItem[]>[],
  reducers: {
    add(state, action){
      let index = state.findIndex((item) => item.id === action.payload.id)
      if(index > -1){
      state[index].quant += action.payload.quant
      }else {
        state.push(action.payload)
      }
    },
    del(state, action){
    return state = state.filter(({id}) => id !== action.payload)
    },
    clear(state, action){
      return state.splice(0, action.payload.lenght)
    }
  }
});

export const {add, del, clear} = slice.actions
export default slice.reducer