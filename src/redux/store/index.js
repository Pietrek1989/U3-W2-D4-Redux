import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobsListReducer from "../reducers/jobListReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer,
    jobs: jobsListReducer,
  }),
});

export default store;
