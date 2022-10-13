import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => {
  return {
    root: () => {
      return {
        "&.MuiTab-root": {
          color: "black",
          fontFamily: "Helvetica",
          fontSize: "0.95rem",
          minWidth: 10,
          padding: 0,
          minHeight: 32,
          marginRight: 32,
          textTransform: "none"
        }
      };
    }
  };
});

export default useStyles;
