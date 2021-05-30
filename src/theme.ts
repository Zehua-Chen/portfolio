import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
  shape: {
    borderRadius: 8,
  },
});
