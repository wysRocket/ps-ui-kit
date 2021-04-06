import {CSSProperties, default as React} from "react";
import * as Style from "./DefaultStyles";
import {Button} from "@material-ui/core";

interface IProps {
  style?: CSSProperties;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  label: string;
  onClick?: (evt?: any) => void;
}

const COMMON_STYLE: CSSProperties = {boxShadow: 'none', textTransform: 'none', paddingLeft: Style.Padding.M, paddingRight: Style.Padding.M};

export class Orange extends React.Component<IProps> {
  render() {
    const s = this.props.style || {};
    const style: CSSProperties = {
      ...COMMON_STYLE,
      backgroundColor: Style.Buttons.Orange.BG_COLOR,
      borderColor: Style.Buttons.Orange.BG_COLOR,
      color: Style.Buttons.Orange.COLOR,
      // fontWeight: 'bold',
      ...s
    };
    return (
      <Button
        style={style}
        variant={'outlined'}
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

export class Gray extends React.Component<IProps> {
  render() {
    const s = this.props.style || {};
    const style: CSSProperties = {
      ...COMMON_STYLE,
      backgroundColor: Style.Buttons.Gray.BG_COLOR,
      borderColor: Style.Buttons.Gray.BG_COLOR,
      color: Style.Buttons.Gray.COLOR,
      // fontWeight: "bold",
      ...s
    };
    return (
      <Button
        style={style}
        variant={'outlined'}
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

export class Red extends React.Component<IProps> {
  render() {
    const s = this.props.style || {};
    const style: CSSProperties = {
      ...COMMON_STYLE,
      backgroundColor: '#FFFFFF',
      borderColor: Style.Buttons.Red.BG_COLOR,
      color: Style.Buttons.Red.COLOR,
      // fontWeight: "bold",
      ...s
    };
    return (
      <Button
        style={style}
        variant={'outlined'}
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
