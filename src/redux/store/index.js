import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobsListReducer from "../reducers/jobListReducer";
import localStorage from "redux-persist/es/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PIOTR_SECRET_KEY,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};
const combineReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobsListReducer,
});
const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
const persistedStore = persistStore(store);

export { store, persistedStore };
