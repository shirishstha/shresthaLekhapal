import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState = {
    user: userData.user || {
        email: "",
        role: "",
        name: "",
        contact: ""
    },
    token: userData.token || ""
}

export const lekapalSlice = createSlice({
    name: 'lekhapalSlice',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const userLog = {
                role: action.payload.user.role,
                name: action.payload.user.name,
                contact: action.payload.user.contact,
                email: action.payload.user.email
            }

            state.user = userLog;
            state.token = action.payload.token;

        }

    }
})

export default lekapalSlice.reducer
export const { loginUser } = lekapalSlice.actions