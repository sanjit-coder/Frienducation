import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envconfig from "../../../env.config";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  error: null,
};

export const applyForCommunity = createAsyncThunk(
  "community/applyForCommunity",
  async ({ payload, callback }) => {
    try {
      const response = await axios({
        method: "POST",
        baseURL: envconfig.API_BASE_URL,
        url: "/community/create",
        data: payload,
      });
      toast.success("Community created successfully!");
      callback();
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //CASES FOR COMMUNITY APPLY
    builder.addCase(applyForCommunity.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(applyForCommunity.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(applyForCommunity.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default communitySlice.reducer;
