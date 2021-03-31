import {CSSProperties, default as React} from "react";
import NumberedContainer from "./NumberedContainer";
import AlignedHGroup from "./AlignedHGroup";
import {IconButton, TextField} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import * as Styles from "./DefaultStyles";

interface IProps {
  style?: CSSProperties;
  number: number;
  name?: string;
  value?: string;
  onRemove: () => void;
  onChange: (name: string, value: string) => void;
}

export default class NameValueContainer extends React.Component<IProps> {
  state = {
    name: '',
    value: '',
  };

  setInitialState = (props: IProps) => {
    this.setState({name: props.name || '', value: props.value || ''});
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.setInitialState(nextProps);
  }

  componentWillMount(): void {
    this.setInitialState(this.props);
  }

  onPropertyChange = (prop: string, v: any) => {
    this.setState({[prop]: v}, () => {
      const {name, value} = this.state;
      this.props.onChange(name, value);
    });
  }

  createChangeHandler = (prop: string) => (evt: any) => {
    this.onPropertyChange(prop, evt.target.value);
  }

  render() {
    return (
      <NumberedContainer style={this.props.style} number={this.props.number} onRemove={this.props.onRemove}>
        <div style={{padding: Styles.Padding.S}}>
          <AlignedHGroup>
            <div style={{width: 74}}>
              Name:
            </div>
            <TextField
              style={{width: 400}}
              inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: Styles.Padding.L, backgroundColor: 'white'}}}
              InputProps={{
                style: {paddingTop: 0, paddingBottom: 0, height: Styles.Padding.L, backgroundColor: 'white'},
                onChange: this.createChangeHandler('name'),
                defaultValue: this.state.name}}
              variant="outlined"
            />
            <div>
              <IconButton>
                <InfoIcon style={{color: Styles.Icon.Button.COLOR}}/>
              </IconButton>
            </div>
          </AlignedHGroup>
          <AlignedHGroup style={{paddingTop: Styles.Padding.S}}>
            <div style={{width: 74}}>
              Value:
            </div>
            <TextField
              style={{width: 400}}
              inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: Styles.Padding.L, backgroundColor: 'white'}}}
              InputProps={{
                style: {paddingTop: 0, paddingBottom: 0, height: Styles.Padding.L, backgroundColor: 'white'},
                onChange: this.createChangeHandler('value'),
                defaultValue: this.state.value}}
              variant="outlined"
            />
            <div>
              <IconButton>
                <InfoIcon style={{color: Styles.Icon.Button.COLOR}}/>
              </IconButton>
            </div>
          </AlignedHGroup>
        </div>
      </NumberedContainer>
    );
  }
}
