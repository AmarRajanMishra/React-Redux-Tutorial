import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  value: '',
}

export const themeSlice = createSlice({
  name: 'themeX',
  initialState: initialStateValue,
  reducers: {
    
    changeTextTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTextTheme } = themeSlice.actions

export default themeSlice.reducer


