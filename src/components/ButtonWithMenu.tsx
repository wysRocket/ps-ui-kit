import {CSSProperties, default as React} from "react";
import {
  Button,
  ClickAwayListener,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper
} from "@material-ui/core";

export interface ButtonMenuItem {
  onClick: () => void;
  label: React.ReactNode;
  icon?: any;
}

interface IProps {
  style?: CSSProperties;
  variant?: 'text' | 'outlined' | 'contained';
  items: ButtonMenuItem[];
  children: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  menuMaxHeight?: number;
  menuWidth?: number;
}

export class ButtonWithMenu extends React.Component<IProps> {
  state = {
    opened: false,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  }

  onClickAway = () => {
    this.setState({opened: false});
  }

  createItemClickHandler = (item: ButtonMenuItem) => () => {
    this.setState({opened: false}, () => item.onClick());
  }

  render() {
    const style: CSSProperties = this.props.style || {width: 32, height: 32, minWidth: 32};
    const s = this.props.style || {};
    const menuWidth = this.props.menuWidth || s.width;
    const ws = menuWidth ? {width: menuWidth} : {};
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper open={this.state.opened} anchorEl={this.state.anchorEl} placement={'bottom-end'} transition>
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper elevation={3}>
                  <div style={{...ws, maxHeight: this.props.menuMaxHeight || 400, overflow: 'auto'}}>
                  <List>
                    {this.props.items.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          style={{display: 'flex', paddingLeft: 16, paddingRight: 16}}
                          button={true}
                          onClick={this.createItemClickHandler(item)}
                        >
                          {this.renderIcon(item)}
                          <ListItemText primary={item.label} />
                        </ListItem>
                      );
                    })}
                  </List>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
          <Button
            variant={this.props.variant || 'outlined'}
            style={style}
            onClick={this.onButtonClick}
            startIcon={this.props.startIcon}
            endIcon={this.props.endIcon}
          >
            {this.props.children}
          </Button>
        </div>
      </ClickAwayListener>
    );
  }

  renderIcon(item: ButtonMenuItem) {
    if (!item.icon) {
      return '';
    }
    return (
      <ListItemIcon style={{minWidth: 32}}>
        {item.icon}
      </ListItemIcon>
    );
  }
}
