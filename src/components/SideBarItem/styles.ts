export const styles = {
  defaultItem: {
    display: "flex",
    justifyContent: "start",
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
    color: "rgb(205, 198, 191)",
    padding: "8px",
    justifyContent: "center"
  },
  activeIcon: {
    color: "rgb(93, 74, 238)"
  }
};
