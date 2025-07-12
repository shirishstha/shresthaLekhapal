import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState = {
    user: userData.user || {
        email: "",
        role: "",
        name: "",
        contact: ""
    },
    token: userData.token || "",
    status: userData.status || "unauthenticated"
}

export const lekapalSlice = createSlice({
    name: 'lekhapalSlice',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.status = "authenticated"

        },
        tokenExpired : (state) => {
            state.user = null;
            state.token = null;
            state.status = "expired"
            
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.status = "loggingout"
        }

    }
})

export default lekapalSlice.reducer
export const { loginUser,tokenExpired, logoutUser } = lekapalSlice.actions