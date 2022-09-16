import {ReactNode} from "react";

import DefaultIcon from "@material-ui/icons/InsertPhoto";

import {NavLink, NavLinkProps, useMatch} from "react-router-dom";

import {useStyles} from "./styles";
export interface SidebarItemProps extends NavLinkProps {
  title: string;
  icon?: ReactNode;
  isMinimized?: boolean;
}

export const SideBarItem: React.FC<SidebarItemProps> = ({
  title,
  icon,
  to,
  isMinimized = false,
  ...props
}) => {
  const classes = useStyles();
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
