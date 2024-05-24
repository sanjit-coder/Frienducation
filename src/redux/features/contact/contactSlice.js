import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envconfig from "../../../env.config";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  error: null,
};

export const createCounselling = createAsyncThunk(
  "contact/createCounselling",
  async ({ payload, callback }) => {
    try {
      const response = await axios({
        method: "POST",
        baseURL: envconfig.API_BASE_URL,
        url: "/counselling/create",
        data: payload,
      });
      toast.success("Your counselling session is booked!");
      callback();
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async ({ payload, callback }) => {
    try {
      const response = await axios({
        method: "POST",
        baseURL: envconfig.API_BASE_URL,
        url: "/contact/create",
        data: payload,
      });
      toast.success(
        "Thank you for getting in touch with us. We will get back to you shortly!"
      );
      callback();
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //CASES FOR CREATE COUNSELLING
    builder.addCase(createCounselling.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCounselling.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createCounselling.rejected, (state, action) => {
      state.isLoading = false;
    });

    //CASES FOR SEND MESSAGE
    builder.addCase(sendMessage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default contactSlice.reducer;
