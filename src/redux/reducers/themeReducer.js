import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const themeSlice = createSlice({
  name: "activeTheme",
  initialState: {
    activeTheme: "light",
  },
  reducers: {
    getActiveTheme(state) {
      const cookiesData = cookies.getAll();
      state.activeTheme = cookiesData?.activeTheme ?? "light";
    },
    toggleTheme(state) {
      state.activeTheme = state.activeTheme === "light" ? "dark" : "light";
      cookies.set("activeTheme", state.activeTheme, { maxAge: 60 * 60 * 24 });
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { getActiveTheme, toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.activeTheme;
