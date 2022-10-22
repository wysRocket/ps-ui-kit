import {CSSProperties, FC} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {User} from "../../domain/User";
import {Badge, IconButton, Toolbar} from "@mui/material";
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
        size="large">
        <MenuIcon style={{color: "#A7A7A7"}} />
      </IconButton>
      <div style={{flexGrow: 1}} />
      {onFilterChange && <Filter placeholder={filterPlaceholder} filter={filterHandler} />}
      <div style={{paddingLeft: 100}} />
      {children}
      <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
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
