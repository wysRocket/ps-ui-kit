import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#f8f8f8"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          borderRadius: 4
        }
      }
    }
  }
});

export default theme;
