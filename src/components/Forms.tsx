import {CSSProperties, default as React} from "react";
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import * as Styles from "./DefaultStyles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

interface ICheckProps {
  name?: string;
  checked?: boolean;
  style?: CSSProperties;
  onChange?: () => void;
}

export class CheckBoxInGroup extends React.Component<ICheckProps> {
  render() {
    const s = this.props.style || {};
    return (
      <FormControlLabel
        style={{display: 'block'}}
        control={<Checkbox
          checked={this.props.checked}
          style={{color: Styles.Forms.Item.COLOR, ...s}}
          onChange={this.props.onChange}
          name={this.props.name}
        />}
        label=""
      />
    );
  }
}

export class SimpleCheckbox extends React.Component<ICheckProps> {
  render() {
    return (
      <Checkbox
        checked={this.props.checked}
        onChange={this.props.onChange}
        style={{padding: 0, width: 32, height: 32}}
        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 24, color: Styles.Forms.Item.COLOR}} />}
        checkedIcon={<CheckBoxIcon style={{ fontSize: 24, color: Styles.Forms.Item.COLOR}} />}
      />
    );
  }
}

interface IRadioProps {
  style?: CSSProperties;
  value: any;
  label?: string;
}

export class RadioInGroup extends React.Component<IRadioProps> {
  render() {
    const s = this.props.style || {};
    return (
      <FormControlLabel
        style={{display: 'block'}}
        value={this.props.value}
        control={<Radio style={{color: Styles.Forms.Item.COLOR, ...s}} />}
        label={this.props.label} />
    );
  }
}

interface RBGroupProps<T = string> {
  style?: CSSProperties;
  items: Array<{label: string, value: T}>;
  value: T;
  name: string;
  onChange: (value: T) => void;
}

export class RBGroup<T = string> extends React.Component<RBGroupProps<T>> {
  onChange = (evt: any) => {
    this.props.onChange(evt.target.value);
  }

  render() {
    const s = this.props.style || {};
    return (
      <RadioGroup name={this.props.name} value={this.props.value} onChange={this.onChange}>
        {this.props.items.map((item, i) => {
          return (
            <FormControlLabel
              key={i}
              style={{display: 'block'}}
              value={item.value}
              control={<Radio style={{color: Styles.Forms.Item.COLOR, ...s}} />}
              label={item.label} />
          );
        })}
      </RadioGroup>
    );
  }
}
