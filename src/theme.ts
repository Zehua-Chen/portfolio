import { createTheme } from "@mui/material/styles";
import indigo from "@mui/material/colors/indigo";
import orange from "@mui/material/colors/orange";

export default createTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
  shape: {
    borderRadius: 8,
  },
});
