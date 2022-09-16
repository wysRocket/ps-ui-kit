import {ReactNode} from "react";

import DefaultIcon from "@material-ui/icons/InsertPhoto";

import {Link, NavLinkProps, useMatch} from "react-router-dom";

import {useStyles} from "./styles";

export interface SidebarItemProps extends NavLinkProps {
  title: string;
  icon?: ReactNode;
  link: string;
  isMinimized?: boolean;
}

export const SideBarItem: React.FC<SidebarItemProps> = ({title, icon, link, isMinimized}) => {
  const classes = useStyles();
  const match = useMatch(link);

  return (
    <Link className={match ? classes.activeItem : classes.defaultItem} to={link}>
      <div className={match ? classes.activeIcon : classes.defaultIcon}>
        {icon ? icon : <DefaultIcon />}
      </div>
      {!isMinimized && <p className={match ? classes.activeText : classes.defaultText}>{title}</p>}
    </Link>
  );
};
