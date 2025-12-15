import { configureStore } from "@reduxjs/toolkit";

//Reducers
import { themeReducer } from "./reducers/themeReducer";

export const store = configureStore({
  reducer: {
    activeTheme: themeReducer,
  },
});
