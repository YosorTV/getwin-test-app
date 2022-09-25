import { createTheme, ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          cursor: "pointer",
          color: "white",
          "&::before": {
            borderColor: "rgba(0, 0, 0, 0.42);",
          },
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.42);",
          },
        },
      },
    },
  },
});
