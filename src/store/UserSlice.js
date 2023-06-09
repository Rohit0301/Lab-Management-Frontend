import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'rohit',
    role: 'laboratory',
    loading: false,
    isLoggedIn: true
  },
  reducers: {
    setUser: (state) => {
      state.user = user
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    }
  },
})

export const { setUser, setLoading } = userSlice.actions
export default userSlice.reducer

