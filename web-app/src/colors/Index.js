import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000", //black
    },
    secondary: {
      main: "#28df99", //green
    },
    type: "dark", //to see light text from MUI on black background
  },
});

export default theme;
