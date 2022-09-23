import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'theme',
  initialState: {
    dark: false, 
  },
  reducers: {
    setTheme: (state, action) => {
      state.dark = action.payload
    },
  }
});

export const {setTheme} = slice.actions
export default slice.reducer