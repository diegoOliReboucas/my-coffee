import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'modal',
  initialState: {
    id: 0,
    title: '', 
    img: '',
    price: 0,
    desc: '',
    quant: 1,
    open: false,
    endOpen: false
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setImg: (state, action) => {
      state.img = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    },
    setDesc: (state, action) => {
      state.desc = action.payload
    },
    setQuant: (state, action) => {
      state.quant = action.payload
    },
    setOpen: (state, action) => {
      state.open = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    setEndOpen: (state, action) => {
      state.endOpen = action.payload
    },
  }
});

export const {setTitle, setPrice, setImg, setDesc, setQuant, setOpen, setId, setEndOpen} = slice.actions
export default slice.reducer