import Head from "next/head";
import { useState, useEffect } from "react";

import MyAppBar from "@/components/common/MyAppBar";
import { lightTheme, darkTheme } from "@/styles/mui/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { selectTheme, getActiveTheme } from "@/redux/reducers/themeReducer";

export default function Blog() {
  // const [currentTheme, setCurrentTheme] = useState("light");
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;

  useEffect(() => {
    dispatch(getActiveTheme());
  }, []);

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Head>
          <title>Blog | The Movie Lovers Club</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <div>Blog</div>
      </ThemeProvider>
    </>
  );
}
