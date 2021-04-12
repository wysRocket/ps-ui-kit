import {CSSProperties, default as React} from "react";
import {Button, ClickAwayListener, Fade, List, ListItem, ListItemText, Paper, Popper} from "@material-ui/core";
import ExpandIcon from '@material-ui/icons/ExpandMore';
import CollapseIcon from '@material-ui/icons/ExpandLess';
import {Orange} from "./Buttons";
import * as Styles from "./DefaultStyles";

export interface IConfirm {
  warning: string;
  actionText: string;
}

export interface ConfirmButtonItem {
  onClick: () => void;
  label: string;
  confirm?: IConfirm;
}

interface IProps {
  style?: CSSProperties;
  disabled?: boolean;
  items: ConfirmButtonItem[];
  label: string;
}

export class ConfirmButton extends React.Component<IProps> {
  state = {
    opened: false,
    confirmItem: undefined,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget, confirmItem: undefined});
  }

  onClickAway = () => {
    this.setState({opened: false, confirmItem: undefined});
  }

  render() {
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper open={this.state.opened} anchorEl={this.state.anchorEl} placement={'bottom-end'} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper elevation={3}>
                  {this.renderContent()}
                </Paper>
              </Fade>
            )}
          </Popper>
          <Orange
            label={this.props.label}
            onClick={this.onButtonClick}
            disabled={this.props.disabled}
            endIcon={this.renderIcon()}
          />
        </div>
      </ClickAwayListener>
    );
  }

  renderIcon() {
    if (this.props.items.length > 1) {
      if (this.state.opened) {
        return (<CollapseIcon/>);
      }
      return (<ExpandIcon/>);
    }

    return '';
  }

  createConfirmClickHandler = (item: ConfirmButtonItem) => () => {
    this.setState({opened: false, confirmItem: undefined}, () => item.onClick());
  }

  createItemClickHandler = (item: ConfirmButtonItem) => () => {
    if (item.confirm) {
      this.setState({confirmItem: item});
    } else {
      this.setState({opened: false, confirmItem: undefined}, () => item.onClick());
    }
  }

  renderContent() {
    const item: ConfirmButtonItem | undefined = this.state.confirmItem as any;
    if (item && item.confirm) {
      return (
        <div style={{paddingLeft: 14, paddingRight: 14, paddingBottom: 10, paddingTop: 24}}>
          <div style={{paddingLeft: 10, paddingRight: 10}}>{item.confirm.warning}</div>
          <div style={{paddingTop: 10}}>
            <Button
              style={{boxShadow: 'none', textTransform: 'none', color: Styles.Forms.Item.COLOR, paddingLeft: 10, paddingRight: 10}}
              onClick={this.createConfirmClickHandler(item)}
            >
              {item.confirm.actionText}
            </Button>
          </div>
        </div>
      );
    }

    return (
      <List>
        {this.props.items.map((buttonItem, index) => {
          return (
            <ListItem style={{paddingLeft: 24}} key={index} button={true} onClick={this.createItemClickHandler(buttonItem)}>
              <ListItemText primary={buttonItem.label}/>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
