import { configureStore, createSlice } from '@reduxjs/toolkit'
// Creating Our Slice It have 3 main Portion name , intialState and Reducers
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false
    },
    reducers: {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        },
    }
})

export const authActions = authSlice.actions
// Creating and Exporting your Store 
export const store = configureStore({
    reducer: authSlice.reducer
})