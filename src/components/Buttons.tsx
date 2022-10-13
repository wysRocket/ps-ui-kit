import {CSSProperties, FC, Component} from "react";
import {Button, ClickAwayListener, Fade, IconButton, Paper, Popper, PopperPlacementType} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';


import * as Styles from "./DefaultStyles";

interface IProps {
  style?: CSSProperties;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  label: string;
  component?: any;
  onClick?: (evt?: any) => void;
}

const COMMON_STYLE: CSSProperties = {
  boxShadow: "none",
  textTransform: "none",
  paddingLeft: Styles.Padding.M,
  paddingRight: Styles.Padding.M
};

const useStyles = makeStyles({
  /*root: {
    ...COMMON_STYLE,
    'backgroundColor': forcedBgColor || c.BG_COLOR,
    'borderColor': c.BG_COLOR,
    'color': c.COLOR,
    '&:hover': {
      backgroundColor: forcedBgColor || c.HOVERED_BG_COLOR,
      borderColor: c.HOVERED_BG_COLOR,
      color: c.HOVERED_COLOR
    }
  },*/
  disabled: {opacity: 0.3}
});

const createStyle = (c: Styles.ButtonColors, style: CSSProperties): CSSProperties => {
  return {
    ...COMMON_STYLE,
    backgroundColor: c.BG_COLOR,
    borderColor: c.BG_COLOR,
    color: c.COLOR,
    ...style
  };
};

export const ButtonsFactory = (
  c: () => Styles.ButtonColors,
  style: CSSProperties,
  variant?: "text" | "outlined" | "contained"
): FC<IProps> => {
  return (props) => {
    const s = props.style || {};
    const classes = useStyles();
    return (
      <Button
        style={createStyle(c(), {...style, ...s})}
        variant={variant}
        classes={{disabled: classes.disabled}}
        component={props.component}
        onClick={props.onClick}
        disabled={props.disabled}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
      >
        {props.label}
      </Button>
    );
  };
};

export const Orange: FC<IProps> = ButtonsFactory(() => Styles.Buttons.Orange, {}, "outlined");

export const Gray: FC<IProps> = ButtonsFactory(() => Styles.Buttons.Gray, {}, "outlined");

export const Red: FC<IProps> = ButtonsFactory(
  () => Styles.Buttons.Red,
  {backgroundColor: "#FFFFFF"},
  "outlined"
);

export class Text extends Component<IProps> {
  render() {
    const s = this.props.style || {};
    const style: CSSProperties = {
      ...COMMON_STYLE,
      ...s
    };
    return (
      <Button
        style={style}
        variant={"text"}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        startIcon={this.props.startIcon}
        endIcon={this.props.endIcon}
      >
        {this.props.label}
      </Button>
    );
  }
}

interface IIBWPProps {
  style?: CSSProperties;
  popperStyle?: CSSProperties;
  disabled?: boolean;
  children: any;
  popperContent: any;
  placement?: PopperPlacementType;
  popperMaxHeight?: number;
  popperWidth?: number;
}

export class IconButtonWithPopper extends Component<IIBWPProps> {
  state = {opened: false, anchorEl: undefined};

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  };

  onClickAway = () => this.setState({opened: false});

  render() {
    const style: CSSProperties = this.props.style || {};
    const s = this.props.style || {};
    const popperWidth = this.props.popperWidth || s.width;
    const ws = popperWidth ? {width: popperWidth} : {};
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper
            style={this.props.popperStyle}
            open={this.state.opened}
            anchorEl={this.state.anchorEl}
            placement={this.props.placement || "right-start"}
            transition
          >
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper elevation={3}>
                  <div
                    style={{
                      ...ws,
                      maxHeight: this.props.popperMaxHeight || 400,
                      overflow: "auto"
                    }}
                  >
                    {this.props.popperContent}
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
          <IconButton
            style={style}
            disabled={this.props.disabled}
            onClick={this.onButtonClick}
            size="large">
            {this.props.children}
          </IconButton>
        </div>
      </ClickAwayListener>
    );
  }
}
