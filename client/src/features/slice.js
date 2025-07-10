import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      user:{
        token:"",
        role:"",
        name:"",
        contact:""
      }
}

export const lekapalSlice = createSlice({
    name: 'lekhapalSlice',
    initialState,
    reducers:{
        loginUser: (state, action) => {
            userLog = {
                token: action.payload.token,
                role: action.payload.role,
                name: action.payload.name,
                contact: action.payload.contact,
            }
            state.user = userLog;

        }

    }
})

export default lekapalSlice.reducer
export const {loginUser} = lekapalSlice.actions