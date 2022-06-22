import { createTheme } from "@mui/material/styles";

const ThemeLight = createTheme({
  palette: {
    background: {
      default: "#242d40",
    },
    text: {
      primary: "#06283D"
    },
    primary: {
      main: "#A760FF",
      
    },
    secondary: {
      main: "#06283D",
    }
  },
});

export default ThemeLight;
