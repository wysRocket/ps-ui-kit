import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  indicator: {
    backgroundColor: "rgb(93, 74, 238)",
    height: "2px"
  },
  tabs: {
    "&.MuiTabs-root": {
      minWidth: 10,
      paddingLeft: 32,
      minHeight: 32,
      borderBottom: "1px solid #c7c7c7"
    }
  }
}));

export default useStyles;
