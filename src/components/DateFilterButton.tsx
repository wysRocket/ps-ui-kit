import * as React from "react";
import {CSSProperties} from "react";
import {DateRange, DateRangePicker} from "@matharumanpreet00/react-daterange-picker";
import FilterIcon from '@material-ui/icons/FilterList';
import {
  Button,
  Fade,
  Paper,
  Popper
} from "@material-ui/core";
import {LabeledItem} from "../domain/Item";
import ContentHeader from "./ContentHeader";
import DropSelector from "./DropSelector";

interface IProps {
  style?: CSSProperties;
  menuMaxHeight?: number;
  items: LabeledItem[];
  selectedProp?: string;
  selectedRange?: DateRange;
  onRangeChanged: (property: string, range: DateRange) => void;
}

interface IState {
  opened: boolean;
  anchorEl: any;
  property?: string;
  range?: DateRange;
}

export class DateFilterButton extends React.Component<IProps> {
  state: IState = {
    opened: false,
    anchorEl: undefined,
    property: 'startedAt',
  };

  setStateFromProps = (props: IProps) => {
    const newState = {property: props.selectedProp || props.items[0], range: props.selectedRange};
    this.setState(newState);
  }

  componentWillMount(): void {
    this.setStateFromProps(this.props);
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.setStateFromProps(nextProps);
  }

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  }

  onPropertyChange = (v: string) => {
    this.setState({property: v});
  }

  onRangeChanged = (range: DateRange) => {
    this.setState({range});
  }

  onSubmit = () => {
    const {property, range} = this.state;
    if (property && range) {
      this.setState({opened: false}, () => this.props.onRangeChanged(property, range));
    }
  }

  onCancel = () => {
    this.setState({opened: false});
  }

  render() {
    const style: CSSProperties = this.props.style || {width: 32, height: 32, minWidth: 32};
    return (
      <div>
        <Popper open={this.state.opened} anchorEl={this.state.anchorEl} placement={'bottom-end'} transition>
          {({TransitionProps}) => (
            <Fade {...TransitionProps} timeout={200}>
              <Paper elevation={3}>
                <div style={{maxHeight: this.props.menuMaxHeight || 600, overflow: 'auto'}}>
                  <ContentHeader style={{paddingLeft: 32, paddingRight: 32, display: 'flex'}}>
                    <DropSelector items={this.props.items} selected={this.state.property} onChange={this.onPropertyChange}/>
                    <Button disabled={!this.state.property || !this.state.range} onClick={this.onSubmit}>Ok</Button>
                    <Button onClick={this.onCancel}>Cancel</Button>
                  </ContentHeader>
                  <DateRangePicker
                    open={true}
                    maxDate={new Date()}
                    onChange={this.onRangeChanged}
                  />
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button disabled={!this.props.items.length} variant={'outlined'} style={{width: 32, height: 32, minWidth: 32}} onClick={this.onButtonClick}>
          <FilterIcon style={{color: '#999999'}}/>
        </Button>
      </div>
    );
  }
}
