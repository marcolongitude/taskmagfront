import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { Response } from "../../../services/user";

interface UserState {
    user: Response;
}

const initialState: UserState = {
    user: {
        id_users: "",
        name_users: "",
        email_users: "",
        permission: null,
    },
};

const sliceUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState["user"]>) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = sliceUser.actions;
export const UserData = (state: RootState) => state.userData.user;

export default sliceUser.reducer;
