import * as React from 'react';
import {CSSProperties} from "react";
import {FormControl, IconButton, NativeSelect} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export interface RendererProps {
  value: any;
  enumValues?: any[];
  onChange?: (newValue: any) => void;
  onClick?: () => void;
}

interface IProps extends RendererProps {
  style?: CSSProperties;
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
  onChange = (evt: any) => {
    const onChange = this.props.onChange;
    if (onChange !== undefined) {
      onChange(evt.target.value);
    }
  }

  render() {
    const enumValues = this.props.enumValues || [];
    return (
      <FormControl>
        <NativeSelect
          value={this.props.value}
          onChange={this.onChange}
        >
          {enumValues.map((item, index) => {
            return (
              <option key={index} value={item}>{convert(item, this.props.valueToView)}</option>
            );
          })}
        </NativeSelect>
      </FormControl>
    );
  }
}

export class StaticRenderer extends AbstractRenderer {
  render() {
    return convert(this.props.value, this.props.valueToView);
  }
}

export class EditActionRenderer extends AbstractRenderer {
  render() {
    return (
      <IconButton onClick={this.props.onClick}>
        <EditIcon />
      </IconButton>
    );
  }
}

export class DeleteActionRenderer extends AbstractRenderer {
  render() {
    return (
      <IconButton onClick={this.props.onClick}>
        <DeleteIcon />
      </IconButton>
    );
  }
}
