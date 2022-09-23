import {createSlice} from '@reduxjs/toolkit'

type propEnd = {
  nome: string,
  rua: string,
  numero: number,
  cidade: string,
  estado: string
}
export const slice = createSlice({
  name: 'carrinho',
  initialState: {
    carTitle: '', 
    carPrice: 0,
    carImg: '',
    carQuant: 0,
    carTotal: 0,
    carDesc: 0,
    carEnd: <propEnd>{nome: '', rua: '', numero: 0, cidade: '', estado: ''}
  },
  reducers: {
    setCarTitle: (state, action) => {
      state.carTitle = action.payload
    },
    setCarPrice: (state, action) => {
      state.carPrice = action.payload
    },
    setCarImg: (state, action) => {
      state.carImg = action.payload
    },
    setCarQuant: (state, action) => {
      state.carQuant = action.payload
    },
    setCarTotal: (state, action) => {
      state.carTotal = action.payload
    },
    setDesc: (state, action) => {
      state.carDesc = action.payload
    },
    setCarEnd: (state, action) => {
      state.carEnd = action.payload
    }

  }
});

export const {setCarTitle, setCarPrice, setCarImg, setCarQuant, setCarTotal, setDesc, setCarEnd} = slice.actions
export default slice.reducer