import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  sideBarWrapper: {
    width: "184px",
    padding: "8px",
    height: "100vh",
    position: "sticky",
    top: 0,
    left: 0,
    background: "#f8f8f8",
    display: "flex",
    flexDirection: "column"
  },
  sideBarWrapperMinimized: {
    width: "40px"
  },
  sideBarFooter: {
    marginTop: "auto"
  }
});
