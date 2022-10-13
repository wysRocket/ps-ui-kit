import DefaultIcon from "@mui/icons-material/InsertPhoto";

import {useStyles} from "./styles";

export interface SidebarHeaderProps {
  userName: string;
  logo?: string;
  isMinimized?: boolean;
}

const SideBarHeader: React.FC<SidebarHeaderProps> = ({userName, logo, isMinimized = false}) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.headerDefaultWrapper} ${
        isMinimized ? classes.headerMinimizedWrapper : ""
      }`}
    >
      <div className={classes.logoWrapper}>
        {logo ? (
          <img className={classes.logoStyle} src={logo} alt={""} />
        ) : (
          <DefaultIcon className={`${classes.logoStyle} ${classes.defaultLogoStyle}`} />
        )}
      </div>
      {!isMinimized && <div className={classes.userName}>{userName}</div>}
    </div>
  );
};

export default SideBarHeader;
