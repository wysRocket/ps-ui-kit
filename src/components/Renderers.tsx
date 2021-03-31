import * as React from 'react';
import {CSSProperties} from "react";
import {FormControl, IconButton, NativeSelect} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from "react-router-dom";
import {ButtonMenuItem, ButtonWithMenu} from "./ButtonWithMenu";
import ExpandIcon from "@material-ui/icons/ExpandMore";

export interface RendererProps {
  item: any;
  value: any;
  enumValues?: any[];
  onChange?: (newValue: any) => void;
  onClick?: () => void;
  link?: string;
}

interface IProps extends RendererProps {
  style?: CSSProperties;
  disabled?: boolean;
  valueToView?: (value: any) => any;
}

function convert(v: any, f?: (value: any) => any) {
  if (f !== undefined) {
    return f(v);
  }
  return v;
}

export abstract class AbstractRenderer extends React.Component<IProps> {}

export class SelectRenderer extends AbstractRenderer {
  state = {selected: undefined};

  componentWillMount() {
    this.setState({selected: this.props.value});
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any) {
    this.setState({selected: nextProps.value});
  }

  onChange = (v: any) => {
    const onChange = this.props.onChange;
    if (onChange !== undefined) {
      this.setState({selected: v}, () => onChange(v));
    }
  }

  render() {
    const enumValues = this.props.enumValues || [];
    const items: ButtonMenuItem[] = enumValues.map((v) => ({
      label: convert(v, this.props.valueToView),
      onClick: () => this.onChange(v)
    }));
    const style = this.props.style || {width: 150};
    return (
      <ButtonWithMenu
        style={{...style, textTransform: 'none'}}
        menuMaxHeight={200}
        variant={'outlined'}
        endIcon={<ExpandIcon/>}
        items={items}>
        {this.state.selected || 'Select'}
      </ButtonWithMenu>
    );
  }
}

export class StaticRenderer extends AbstractRenderer {
  render() {
    return convert(this.props.value, this.props.valueToView);
  }
}

export class LinkRenderer extends AbstractRenderer {
  render() {
    return (
      <Link to={this.props.link || ''} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <strong>{convert(this.props.value, this.props.valueToView)}</strong>
        </div>
      </Link>
    );
  }
}

export class EditActionRenderer extends AbstractRenderer {
  render() {
    return (
      <IconButton onClick={this.props.onClick} disabled={this.props.disabled}>
        <EditIcon />
      </IconButton>
    );
  }
}

export class DeleteActionRenderer extends AbstractRenderer {
  render() {
    return (
      <IconButton onClick={this.props.onClick} disabled={this.props.disabled}>
        <DeleteIcon />
      </IconButton>
    );
  }
}
