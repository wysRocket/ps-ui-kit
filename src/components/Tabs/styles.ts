import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  indicator: {
    backgroundColor: "rgb(93, 74, 238)",
    height: "2px"
  },
  tabs: {
    "&.MuiTabs-root": {
      minWidth: 10,
      padding: 0,
      minHeight: 32,
      marginRight: 32,
      textTransform: "none"
    }
  }
}));

export default useStyles;
