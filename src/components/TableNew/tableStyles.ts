import {createTheme} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid rgb(218, 220, 221)",
    borderRadius: 4,
    fontSize: "14px",
    lineHeight: "15px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    letterSpacing: "0.05em"
  },
  activeSortIcon: {
    opacity: 1
  },
  inactiveSortIcon: {
    opacity: 0.2
  }
}));

export const getMuiTheme = () =>
  createTheme({
    overrides: {
      MuiPaper: {
        root: {
          borderRadius: "4px"
        }
      },
      MuiTableRow: {
        head: {
          background: "rgb(248, 248, 248)"
        }
      },
      MuiTableCell: {
        head: {
          borderRadius: "4px"
        }
      }
    }
  });
