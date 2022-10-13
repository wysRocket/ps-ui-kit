import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles({
  headerDefaultWrapper: {
    height: 64,
    paddingLeft: 16,
    paddingTop: 16,
    color: "#6C6C6C",
    display: "flex",
    alignItems: "center",
    columnGap: 6
  },
  headerMinimizedWrapper: {
    paddingLeft: 8
  },
  logoWrapper: {
    width: 40,
    height: 40,
    backgroundColor: "#E7E7E7",
    border: "1px solid rgba(199, 199, 199, 1.0)",
    borderRadius: 3
  },
  logoStyle: {
    width: "100%",
    height: "100%"
  },
  defaultLogoStyle: {
    color: "rgb(97, 97, 104)"
  },
  userName: {
    fontSize: 20,
    fontFamily:
      "Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
  }
});
