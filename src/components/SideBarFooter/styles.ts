import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles({
  footerWrapper: {
    paddingLeft: 24,
    paddingBottom: 32
  },
  poweredByText: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#636363"
  },
  logoWrapper: {
    paddingTop: 8
  },
  helpTextWrapper: {
    paddingTop: 14,
    display: "flex",
    justifyContent: "flex-end"
  },
  helpText: {
    fontWeight: "bold",
    color: "#636363",
    width: 80
  }
});
