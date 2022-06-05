import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BEBEBE",
    },
    secondary: {
      main: "#686868",
      contrastText: "red",
      nice: "blue",
      customoffwhite: "#fff",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          // fontSize: "75%",
          "@media only screen and (max-width: 1440px)": {
            fontSize: "75%",
          },
          backgroundColor: "rgb(238,238,238)",
        },
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // fontWeight: 500,
          fontSize: "1.rem",
          textTransform: "none",
          margin: "0px 15px",
          '&.Mui-selected': {
            background: '#E53B37',
            color: "#fff",
            margin: "0px 15px",
            borderRadius: "3px",
            boxShadow: "0 5px 9px 0 rgba(149, 165, 166, 0.85)",
          },
        },
      },
    },
  },
  spacing: (sp) => `${0.85 * sp}rem`
});


export default theme;
