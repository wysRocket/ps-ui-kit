import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        borderRadius: 4
      }
    },
    MuiTableRow: {
      head: {
        background: "#f8f8f8"
      }
    },
    MuiTableCell: {
      head: {
        borderRadius: 4
      }
    }
  }
});

export default theme;
