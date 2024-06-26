import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    accessToken: '',
    user: '',
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<{ accessToken: string, user: string }>) => {
            state.accessToken = action.payload.accessToken,
                state.user = action.payload.user
        },
        userLoggedOut: (state) => {
            state.accessToken = "",
                state.user = ""
        }
    }

})