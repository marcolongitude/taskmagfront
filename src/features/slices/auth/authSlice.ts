import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";

export const initialState = {
    token: "",
    user: {
        id_users: "",
        name_users: "",
        email_users: "",
    },
};

interface LoginProps {
    token: string;
    user: {
        id_users: string;
        name_users: string;
        email_users: string;
    };
}

const sliceUser = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin(state, action: PayloadAction<LoginProps>) {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        setLogout(state) {
            state.token = initialState.token;
            state.user = initialState.user;
        },
    },
});

export const { setLogin, setLogout } = sliceUser.actions;
export const selectCurrentUser = (state: RootState) => state.auth;
export const token = (state: RootState) => state.auth.token;
export const user = (state: RootState) => state.auth.user;

export default sliceUser.reducer;
