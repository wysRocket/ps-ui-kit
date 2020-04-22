import {CSSProperties, default as React} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {User} from "../domain/User";
import {Badge, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import Filter from "./Filter";

interface IProps {
  style?: CSSProperties;
  user: User;
}

export default class AppHeader extends React.Component<IProps> {
  render() {
    return (
      <Toolbar style={{borderBottom: '1px solid rgba(199, 199, 199, 1.0'}}>
        <IconButton
          edge="start"
          style={{marginRight: 20}}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon style={{color: '#A7A7A7'}}/>
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
        <div style={{flexGrow: 1}} />
        <Filter filter={(f: string) => console.log('f')}/>
        <div style={{paddingLeft: 100}}/>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon style={{color: '#A7A7A7'}}/>
          </Badge>
        </IconButton>
        {this.props.user.login}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle style={{color: '#A7A7A7'}}/>
        </IconButton>
      </Toolbar>
    );
  }
}
