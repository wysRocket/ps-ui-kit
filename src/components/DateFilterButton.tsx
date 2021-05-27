import * as React from "react";
import {CSSProperties} from "react";
import {DateRange, DateRangePicker} from "@matharumanpreet00/react-daterange-picker";
import FilterIcon from '@material-ui/icons/FilterList';
import {
  Button, Dialog,
  Fade, IconButton,
  Paper,
  Popper, Typography
} from "@material-ui/core";
import {LabeledItem} from "../domain/Item";
import ContentHeader from "./ContentHeader";
import DropSelector from "./DropSelector";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";

interface IProps {
  style?: CSSProperties;
  menuMaxHeight?: number;
  minDate?: Date;
  maxDate?: Date;
  items: LabeledItem[];
  selectedProp?: string;
  selectedRange?: DateRange;
  onRangeChanged: (property: string, range: DateRange) => void;
  cancelLabel?: string;
  okLabel?: string;
}

interface IState {
  opened: boolean;
  property?: string;
  range?: DateRange;
}

export class DateFilterButton extends React.Component<IProps> {
  state: IState = {
    opened: false,
    property: 'startedAt',
  };

  setStateFromProps = (props: IProps) => {
    const first = props.items[0];
    const newState = {property: props.selectedProp || first ? first.value : undefined, range: props.selectedRange};
    this.setState(newState);
  }

  componentWillMount(): void {
    this.setStateFromProps(this.props);
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.setStateFromProps(nextProps);
  }

  onButtonClick = () => {
    this.setState({opened: true});
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
      this.setState({opened: false, range: undefined}, () => this.props.onRangeChanged(property, range));
    }
  }

  onCancel = () => {
    this.setState({opened: false, range: undefined});
  }

  render() {
    const style: CSSProperties = this.props.style || {width: 32, height: 32, minWidth: 32};
    return (
      <div>
        <Dialog maxWidth={false} PaperProps={{style: {borderRadius: 0}}} onClose={this.onCancel} open={this.state.opened}>
          <Paper elevation={3}>
            <div>
            <ContentHeader style={{paddingLeft: 32, paddingRight: 32, display: 'flex'}}>
              <DropSelector items={this.props.items} selected={this.state.property} onChange={this.onPropertyChange}/>
              <Button disabled={!this.state.property || !this.state.range} onClick={this.onSubmit}>{this.props.okLabel || 'Ok'}</Button>
              <Button onClick={this.onCancel}>{this.props.cancelLabel || 'Cancel'}</Button>
            </ContentHeader>
            <DateRangePicker
              open={true}
              initialDateRange={this.state.range || {}}
              maxDate={this.props.maxDate || new Date()}
              minDate={this.props.minDate}
              onChange={this.onRangeChanged}
            />
          </div>
          </Paper>
        </Dialog>
        <Button disabled={!this.props.items.length} variant={'outlined'} style={{width: 32, height: 32, minWidth: 32}} onClick={this.onButtonClick}>
          <FilterIcon style={{color: '#999999'}}/>
        </Button>
      </div>
    );
  }
}
