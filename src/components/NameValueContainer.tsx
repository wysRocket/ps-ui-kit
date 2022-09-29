import {CSSProperties, default as React} from "react";
import NumberedContainer from "./NumberedContainer";
import AlignedHGroup from "./AlignedHGroup";
import {TextField} from "@material-ui/core";
import * as Styles from "./DefaultStyles";

interface IProps {
  style?: CSSProperties;
  number: number;
  name?: string;
  value?: string;
  onRemove: () => void;
  onChange: (name: string, value: string) => void;
  nameLabel?: string;
  valueLabel?: string;
  nameHint: any;
  valueHint: any;
}

export default class NameValueContainer extends React.Component<IProps> {
  onNameChange = (evt: any) => {
    this.props.onChange(evt.target.value, this.props.value || "");
  };

  onValueChange = (evt: any) => {
    this.props.onChange(this.props.name || "", evt.target.value);
  };

  render() {
    return (
      <NumberedContainer
        style={this.props.style}
        number={this.props.number}
        onRemove={this.props.onRemove}
      >
        <div style={{padding: Styles.Padding.S}}>
          <AlignedHGroup>
            <div style={{width: 74}}>{this.props.nameLabel || "Name:"}</div>
            <TextField
              style={{width: 400}}
              inputProps={{
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: Styles.Padding.L,
                  backgroundColor: "white"
                }
              }}
              InputProps={{
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: Styles.Padding.L,
                  backgroundColor: "white"
                }
              }}
              variant="outlined"
              onChange={this.onNameChange}
              value={this.props.name || ""}
            />
            {this.props.nameHint}
          </AlignedHGroup>
          <AlignedHGroup style={{paddingTop: Styles.Padding.S}}>
            <div style={{width: 74}}>{this.props.valueLabel || "Value:"}</div>
            <TextField
              style={{width: 400}}
              inputProps={{
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: Styles.Padding.L,
                  backgroundColor: "white"
                }
              }}
              InputProps={{
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: Styles.Padding.L,
                  backgroundColor: "white"
                }
              }}
              onChange={this.onValueChange}
              value={this.props.value || ""}
              variant="outlined"
            />
            {this.props.valueHint}
          </AlignedHGroup>
        </div>
      </NumberedContainer>
    );
  }
}
