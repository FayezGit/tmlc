import { createTheme } from "@mui/material/styles";
// Color Variables
const backgroundColour = "#F3F8F2";
const primaryColour = "#FCB07E";
const textColour = "#242423";
const secondaryColour = "#8895C9";
const highlightColour = "#EC058E";

const backgroundColourDark = "#242423";
const primaryColourDark = "#885432ff";
const textColourDark = "#F3F8F2";
const secondaryColourDark = "#3c4469ff";
const highlightColourDark = "#EC058E";

//Light Theme
let theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: backgroundColour,
    },
    primary: {
      main: primaryColour,
    },
    secondary: {
      main: secondaryColour,
    },
    tertiary: {
      main: highlightColour,
    },
    icon: {
      main: textColour,
    },
    error: {
      main: "#D80037",
    },
  },
});

//Dark Theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: backgroundColourDark,
    },
    primary: {
      main: primaryColourDark,
    },
    secondary: {
      main: secondaryColourDark,
    },
    tertiary: {
      main: highlightColourDark,
    },
    icon: {
      main: textColourDark,
    },
    error: {
      main: "#D80037",
    },
  },
});


export { theme, darkTheme};
