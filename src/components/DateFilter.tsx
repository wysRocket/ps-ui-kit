import {CSSProperties, default as React} from "react";
import {Button, Divider, Fade, FormControl, FormGroup, Paper, Popper} from "@material-ui/core";
import FilterIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {DateRange, DateRangePicker} from "@matharumanpreet00/react-daterange-picker/build";

interface IProps {
  style?: CSSProperties;
}

export default class DateFilter extends React.Component<IProps> {
  state = {
    opened: false,
    anchorEl: undefined,
    dateRange: {},
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  }

  onDateRangeChange = (dateRange: DateRange) => {
    this.setState({dateRange});
  }

  render() {
    return (
      <div>
        <Popper open={this.state.opened} anchorEl={this.state.anchorEl} placement={'bottom-end'} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={3}>
                <DateRangePicker open={true} onChange={this.onDateRangeChange} initialDateRange={this.state.dateRange}>
                  <div>
                    <Button variant={'outlined'}>Ok</Button>
                    <Button variant={'outlined'}>Cancel</Button>
                  </div>
                </DateRangePicker>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button variant={'outlined'} style={{width: 32, height: 32, minWidth: 32}} onClick={this.onButtonClick}>
          <FilterIcon style={{color: '#999999'}}/>
        </Button>
      </div>
    );
  }}
