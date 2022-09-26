import {CSSProperties, default as React} from "react";
import {
  ClickAwayListener,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper
} from "@material-ui/core";
import {ButtonMenuItem} from "./ButtonWithMenu";

interface IProps {
  edge?: "start" | "end";
  style?: CSSProperties;
  items: ButtonMenuItem[];
  children: any;
}

export class IconButtonWithMenu extends React.Component<IProps> {
  state = {
    opened: false,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  };

  onClickAway = () => {
    this.setState({opened: false});
  };

  createItemClickHandler = (item: ButtonMenuItem) => () => {
    this.setState({opened: false}, () => item.onClick());
  };

  render() {
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper
            open={this.state.opened}
            anchorEl={this.state.anchorEl}
            placement={"bottom-end"}
            transition
          >
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper elevation={3}>
                  <List>
                    {this.props.items.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          style={{display: "flex", paddingLeft: 16, paddingRight: 16}}
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
          <IconButton
            edge={this.props.edge || false}
            style={this.props.style}
            onClick={this.onButtonClick}
          >
            {this.props.children}
          </IconButton>
        </div>
      </ClickAwayListener>
    );
  }

  renderIcon(item: ButtonMenuItem) {
    if (!item.icon) {
      return "";
    }
    return <ListItemIcon style={{minWidth: 32}}>{item.icon}</ListItemIcon>;
  }
}
