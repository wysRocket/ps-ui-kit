import {CSSProperties, default as React} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {User} from "../../domain/User";
import {Badge, IconButton, Toolbar} from "@mui/material";
import Filter from "../Filter";
import {ButtonMenuItem} from "../ButtonWithMenu";
import {IconButtonWithMenu} from "../IconButtonWithMenu";

interface IProps {
  style?: CSSProperties;
  user: User;
  menuItems: ButtonMenuItem[];
  notifications?: number;
  children?: any;
  onFilterChange?: (filter: string) => void;
  filterPlaceholder?: string;
  onSwitchSidebarMode?: () => void;
}

export default class AppHeader extends React.Component<IProps> {
  render() {
    return (
      <Toolbar style={{borderBottom: "1px solid rgba(199, 199, 199, 1.0"}}>
        <IconButton
          edge="start"
          style={{marginRight: 20}}
          color="inherit"
          aria-label="open drawer"
          onClick={this.props.onSwitchSidebarMode}
          size="large">
          <MenuIcon style={{color: "#A7A7A7"}} />
        </IconButton>
        <div style={{flexGrow: 1}} />
        {this.renderFilter()}
        <div style={{paddingLeft: 100}} />
        {this.props.children}
        <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
          <Badge
            badgeContent={this.props.notifications || 0}
            overlap="rectangular"
            color="secondary"
          >
            <NotificationsIcon style={{color: "#A7A7A7"}} />
          </Badge>
        </IconButton>
        {this.props.user.login}
        <IconButtonWithMenu items={this.props.menuItems}>
          <AccountCircle style={{color: "#A7A7A7"}} />
        </IconButtonWithMenu>
      </Toolbar>
    );
  }

  renderFilter() {
    if (this.props.onFilterChange === undefined) {
      return "";
    }
    const filterHandler = (f: string) =>
      this.props.onFilterChange !== undefined ? this.props.onFilterChange(f) : console.log(f);
    return <Filter placeholder={this.props.filterPlaceholder} filter={filterHandler} />;
  }
}
