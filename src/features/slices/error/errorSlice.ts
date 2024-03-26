import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";

export const initialState: ErrorPropsSlice = {
    status: 0,
    message: "",
    response: {
        status: 0,
        data: {
            errors: [],
        },
    },
};

export interface ErrorPropsSlice {
    status: number;
    message: string;
    errors?: Array<string>;
    response: {
        status: number;
        data: {
            errors: Array<string>;
        };
    };
}

const sliceError = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<ErrorPropsSlice>) {
            Object.assign(state, initialState);

            if (action.payload.response && action.payload.response.status) {
                state.response.status = action.payload.response.status;
            }

            if (action.payload.status) {
                state.status = action.payload.status;
            }

            if (
                action.payload.response &&
                action.payload.response.data.errors.length > 0
            ) {
                state.response = {
                    ...state.response,
                    data: {
                        ...state.response.data,
                        errors: [
                            ...state.response.data.errors,
                            ...action.payload.response.data.errors,
                        ],
                    },
                };
            }

            if (action.payload.errors && action.payload.errors.length > 0) {
                state.response = {
                    ...state.response,
                    data: {
                        ...state.response.data,
                        errors: [
                            ...state.response.data.errors,
                            ...action.payload.errors,
                        ],
                    },
                };
            }
        },
    },
});

export const { setError } = sliceError.actions;
export const error = (state: RootState) => state.error;

export default sliceError.reducer;
