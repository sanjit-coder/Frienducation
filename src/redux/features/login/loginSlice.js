import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envconfig from "../../../env.config";
import toast from "react-hot-toast";
import saveDataLocalStorage from "@/utils/helpers/saveDataLocalStorage";

const initialState = {
  isLoading: false,
  isOtpSent: null,
  error: null,
};

export const sendOtp = createAsyncThunk("login/sendOtp", async (data) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: envconfig.API_BASE_URL,
      url: "/auth/send-otp",
      data: data?.data,
    });
    toast.success(response?.data?.message);
    data?.callback();
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }
});

export const verifyOtp = createAsyncThunk("login/verifyOtp", async (data) => {
  data?.haltTimerCallback("stop");
  try {
    const response = await axios({
      method: "POST",
      baseURL: envconfig.API_BASE_URL,
      url: "/auth/verify-otp",
      data: data?.data,
    });
    if (response && response?.data?.success) {
      const registertedmobileNo = data?.data?.phone;
      saveDataLocalStorage("token", response?.data?.token);
      data?.callback();
      toast.success(
        `You have successfully logged in from your mobile number ${registertedmobileNo}`
      );
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    data?.haltTimerCallback("start");
    console.log("ERROR", error);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //CASES FOR SEND OTP
    builder.addCase(sendOtp.pending, (state, action) => {
      state.isLoading = true;
      state.isOtpSent = false;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isOtpSent = true;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.isLoading = false;
      state.isOtpSent = false;
    });
    //CASES FOR VERIFY OTP
    builder.addCase(verifyOtp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default loginSlice.reducer;
