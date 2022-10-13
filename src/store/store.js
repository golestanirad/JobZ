import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job/jobSlice";
import userSlice from "./user/userSlice";
import allJobsSlice from "./allJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
