import {ReactNode} from "react";

import {NavLink, NavLinkProps, useRouteMatch} from "react-router-dom";
import DefaultIcon from "@mui/icons-material/InsertPhoto";

import {useStyles} from "./styles";
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
  const classes = useStyles();
  const match = useRouteMatch(to as string);

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
