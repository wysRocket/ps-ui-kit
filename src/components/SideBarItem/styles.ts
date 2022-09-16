import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  defaultItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 4,
    color: "rgb(113, 113, 113)",
    textDecoration: "none",
    fontFamily: "Arial, Helvetica, sans",
    fontWeight: 600,
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "rgba(195, 187, 250, .5)",
      borderRadius: 4
    }
  },
  activeItem: {
    backgroundColor: "#c3bbfa",
    color: "#5D4AEE"
  },
  defaultIcon: {
    minWidth: 40,
    color: "rgb(205, 198, 191)",
    padding: "8px"
  },
  activeIcon: {
    color: "rgb(93, 74, 238)"
  }
});
