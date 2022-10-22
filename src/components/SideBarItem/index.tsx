import {ReactNode} from "react";

import {NavLink, NavLinkProps, useMatch} from "react-router-dom";
import DefaultIcon from "@mui/icons-material/InsertPhoto";

import {styles} from "./styles";
import useClasses from "utils/useClasses";
export interface SideBarItemProps extends NavLinkProps {
  title: string;
  icon?: ReactNode;
  isMinimized?: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  title,
  icon,
  to,
  isMinimized = false,
  ...props
}) => {
  const classes = useClasses(styles);
  const match = useMatch(to as string);

  return (
    <NavLink
      className={`${classes.defaultItem} ${match ? classes.activeItem : ""}`}
      to={to}
      {...props}
    >
      <div className={`${classes.defaultIcon} ${match ? classes.activeIcon : ""}`}>
        {icon || <DefaultIcon />}
      </div>
      {!isMinimized && <p>{title}</p>}
    </NavLink>
  );
};

export default SideBarItem;
