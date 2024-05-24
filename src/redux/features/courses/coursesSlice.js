import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envconfig from "../../../env.config";

const initialState = {
  courses: [],
  searchResults: null,
  isLoading: true,
  error: null,
  courseDataById : {},
  isCourseDetailsLoading: true,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios({
      method: "GET",
      baseURL: envconfig.API_BASE_URL,
      url: "/course/get",
    });
    return response.data;
  }
);

export const searchCourse = createAsyncThunk(
  "courses/searchCourse",
  async (keyword) => {
    const response = await axios({
      method: "GET",
      baseURL: envconfig.API_BASE_URL,
      url: `/course/search?keyword=${keyword}`,
    });
    return response.data;
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (keyword) => {
    const response = await axios({
      method: "GET",
      baseURL: envconfig.API_BASE_URL,
      url: `course/getById?courseId=${keyword}`,
    });
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    resetSearchState: (state) => {
      state.searchResults = null;
    },
  },
  extraReducers(builder) {
    //CASES FOR ALL COURSES GET
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action?.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.courses = [];
      });
    //CASES FOR SEARCHING COURSES
    builder
      .addCase(searchCourse.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action?.payload?.courses;
      })
      .addCase(searchCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.searchResults = null;
      });
    //CASES FOR COURSE DATA BY ID
    builder
      .addCase(getCourseById.pending, (state, action) => {
        state.isCourseDetailsLoading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isCourseDetailsLoading = false;
        state.courseDataById = action?.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isCourseDetailsLoading = false;
        state.error = action.error.message;
        state.courseDataById = [];
      });
  },
});

export const { resetSearchState } = coursesSlice.actions;

export default coursesSlice.reducer;
