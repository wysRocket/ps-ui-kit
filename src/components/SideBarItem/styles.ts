import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  defaultItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "start",
    borderRadius: 4,
    color: "rgb(113, 113, 113)",
    textDecoration: "none",
    fontFamily: "Arial, Helvetica, sans",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "rgba(195, 187, 250, .5)",
      borderRadius: 4
    }
  },
  activeItem: {
    backgroundColor: "#c3bbfa",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "rgba(195, 187, 250, .5)"
    },
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "start",
    color: "#5D4AEE",
    fontFamily: "Arial, Helvetica, sans",
    fontWeight: 600,
    textDecoration: "none"
  },
  defaultText: {
    fontSize: "15px",
    color: "rgb(113, 113, 113)",
    fontFamily: "Arial, Helvetica, sans",
    fontWeight: 600
  },
  activeText: {
    fontSize: "15px",
    color: "rgb(93, 74, 238)",
    fontFamily: "Arial, Helvetica, sans",
    fontWeight: 600
  },
  activeIcon: {
    minWidth: 40,
    color: "rgb(93, 74, 238)",
    padding: "8px"
  },
  defaultIcon: {
    minWidth: 40,
    color: "rgb(205, 198, 191)",
    padding: "8px"
  }
});
