import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import signUpSlice from "../features/signUp/signUpSlice";
import loginReducer from "../features/login/loginSlice";
import contactReducer from "../features/contact/contactSlice";
import communityReducer from "../features/community/communitySlice";

export const store = configureStore({
  reducer: {
    coursesReducer,
    signUpSlice,
    loginReducer,
    contactReducer,
    communityReducer,
  },
});
