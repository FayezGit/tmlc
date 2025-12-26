import Head from "next/head";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getActiveTheme, selectTheme } from "@/redux/reducers/themeReducer";
import { useEffect } from "react";
import { lightTheme, darkTheme } from "@/styles/mui/theme";

import Login from "../components/common/Login";
import MyAppBar from "../components/common/MyAppBar";

export default function LoginPage() {
  const currentTheme = useSelector(selectTheme).activeTheme;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
    // fetchData(); // Get Movie Data
  }, []);

  return (
    <>
      <Head>
        <title>Login | The Movie Lovers Club | Your Favourite Movie Articles!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <MyAppBar />
        <Login />
      </ThemeProvider>
    </>
  );
}