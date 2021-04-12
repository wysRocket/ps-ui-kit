import {CSSProperties, default as React} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
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

const COMMON_STYLE: CSSProperties = {boxShadow: 'none', textTransform: 'none', paddingLeft: Styles.Padding.M, paddingRight: Styles.Padding.M};

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
  disabled: {
    opacity: 0.3
  },
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
  variant?: 'text' | 'outlined' | 'contained'
): React.FC<IProps> => {
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

export const Orange: React.FC<IProps> = ButtonsFactory(() => Styles.Buttons.Orange, {}, 'outlined');

export const Gray: React.FC<IProps> = ButtonsFactory(() => Styles.Buttons.Gray, {}, 'outlined');

export const Red: React.FC<IProps> = ButtonsFactory(() => Styles.Buttons.Red, {backgroundColor: '#FFFFFF'}, 'outlined');

export class Text extends React.Component<IProps> {
  render() {
    const s = this.props.style || {};
    const style: CSSProperties = {
      ...COMMON_STYLE,
      ...s
    };
    return (
      <Button
        style={style}
        variant={'text'}
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
