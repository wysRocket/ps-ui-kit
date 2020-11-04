import {CSSProperties, default as React} from "react";
import {FormControl, NativeSelect} from "@material-ui/core";
import {LabeledItem} from "../domain/Item";

interface IProps {
  style?: CSSProperties;
  items: LabeledItem[];
  selected?: any;
  onChange: (value: any) => void;
}

export default class DropSelector extends React.Component<IProps> {

  onChange = (evt: any) => {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <FormControl>
        <NativeSelect
          value={this.props.selected}
          onChange={this.onChange}
        >
          {this.props.items.map((item, index) => {
            return (
              <option key={index} value={item.value}>{item.label}</option>
            );
          })}
        </NativeSelect>
      </FormControl>
    );

  }
}
