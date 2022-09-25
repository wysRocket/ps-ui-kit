import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    border: "1px solid #dadcdd",
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
});
