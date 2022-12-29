import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import tourReducer from "./features/tourSlice";
import ProfileReducer from "./features/profileSlice";

export default configureStore({
    reducer: {
      auth:AuthReducer,
      tour:tourReducer,
      profile:ProfileReducer,
      
    },
    devTools: true
  });