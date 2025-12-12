import Link from "next/link";
//MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { theme, darkTheme } from "@/styles/mui/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

export default function MyAppBar() {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
                }}
              >
                <DarkModeIcon />
              </IconButton>
              <Link href="/blog">
                <Button color="inherit">Blog</Button>
              </Link>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}
