import DefaultIcon from "@mui/icons-material/InsertPhoto";
import {FC} from "react";
import useClasses from "utils/useClasses";

import {styles} from "./styles";

export interface SidebarHeaderProps {
  userName: string;
  logo?: string;
  isMinimized?: boolean;
}

const SideBarHeader: FC<SidebarHeaderProps> = ({userName, logo, isMinimized = false}) => {
  const classes = useClasses(styles);

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
