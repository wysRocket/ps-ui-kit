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
  label: string;
  icon?: any;
}

interface IProps {
  style?: CSSProperties;
  items: ButtonMenuItem[];
  children: any;
}

export class ButtonWithMenu extends React.Component<IProps> {
  state = {
    opened: false,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget, confirmItem: undefined});
  }

  onClickAway = () => {
    this.setState({opened: false, confirmItem: undefined});
  }

  createItemClickHandler = (item: ButtonMenuItem) => () => {
    this.setState({opened: false, confirmItem: undefined}, () => item.onClick());
  }

  render() {
    const style: CSSProperties = this.props.style || {width: 32, height: 32, minWidth: 32};
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper open={this.state.opened} anchorEl={this.state.anchorEl} placement={'bottom-end'} transition>
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper elevation={3}>
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
                </Paper>
              </Fade>
            )}
          </Popper>
          <Button
            variant={'outlined'}
            style={style}
            onClick={this.onButtonClick}
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
