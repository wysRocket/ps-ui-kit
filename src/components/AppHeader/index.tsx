import React, {CSSProperties, FC} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
// import {User} from "../../domain/User";
import {User} from "../../domain/User";
import {Badge, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import Filter from "../Filter";
import {ButtonMenuItem} from "../ButtonWithMenu";
import {IconButtonWithMenu} from "../IconButtonWithMenu";

export interface IProps {
  style?: CSSProperties;
  user: User;
  menuItems: ButtonMenuItem[];
  notifications?: number;
  children?: any;
  onFilterChange?: (filter: string) => void;
  filterPlaceholder?: string;
  onSwitchSidebarMode?: () => void;
}

export const AppHeader: FC<IProps> = ({
  style,
  user,
  menuItems,
  notifications,
  children,
  onFilterChange,
  filterPlaceholder,
  onSwitchSidebarMode
}) => {
  const filterHandler = (f: string) =>
    onFilterChange !== undefined ? onFilterChange(f) : console.log(f);

  return (
    <Toolbar style={{borderBottom: "1px solid rgba(199, 199, 199, 1.0"}}>
      <IconButton
        edge="start"
        style={{marginRight: 20}}
        color="inherit"
        aria-label="open drawer"
        onClick={onSwitchSidebarMode}
      >
        <MenuIcon style={{color: "#A7A7A7"}} />
      </IconButton>
      <div style={{flexGrow: 1}} />
      {onFilterChange && <Filter placeholder={filterPlaceholder} filter={filterHandler} />}
      <div style={{paddingLeft: 100}} />
      {children}
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={notifications || 0} overlap="rectangular" color="secondary">
          <NotificationsIcon style={{color: "#A7A7A7"}} />
        </Badge>
      </IconButton>
      {user.login}
      <IconButtonWithMenu items={menuItems}>
        <AccountCircle style={{color: "#A7A7A7"}} />
      </IconButtonWithMenu>
    </Toolbar>
  );
};
