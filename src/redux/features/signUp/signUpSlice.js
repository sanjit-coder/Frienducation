import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envconfig from "../../../env.config";
import toast from "react-hot-toast";

const initialState = {
    isLoading: true,
    error: null,
    isSignUp: false,
};


export const createUser = createAsyncThunk("signUp/createUser", async (data) => {
    const url = `${envconfig.API_BASE_URL}/user/create`
    try {
        const response = await axios.post(url, data?.payload);
        if (response?.data?._id) {
            toast.success("User Created SuccessFully 👍");
            data?.callback();
            return response.data;
        }
        toast.error(`${response?.data?.message} 😟`);
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
);

const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        resetSignUpState: (state) => {
            state.isSignUp = false;
        },
    },
    extraReducers(builder) {
        //CASES FOR SIGN UP
        builder
            .addCase(createUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSignUp = true;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.isSignUp = false;
            });
    },
});

export const { resetSignUpState } = signUpSlice.actions;

export default signUpSlice.reducer;
