import React, {CSSProperties} from "react";
import {
  Button,
  Checkbox,
  Divider,
  Fade,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Popper
} from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterList";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export interface FilterItem {
  value: any;
  label: string;
  selected?: boolean;
}

interface IProps {
  style?: CSSProperties;
  topList: FilterItem[];
  bottomList: FilterItem[];
  headerText?: string;
}

export default class DashboardFilter extends React.Component<IProps> {
  state = {
    opened: false,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  };

  createSelectedChangeHandler = (value: any) => (evt: any) => {
    console.log("checkbox changed", evt.target.checked);
  };

  render() {
    return (
      <div>
        <Popper
          open={this.state.opened}
          anchorEl={this.state.anchorEl}
          placement={"bottom-end"}
          transition
        >
          {({TransitionProps}) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={3}>
                <FormControl component="fieldset">
                  <FormGroup>
                    {this.renderHeader()}
                    <div style={{padding: 10}}>
                      {this.props.topList.map((item, index) => this.renderItem(item, index))}
                    </div>
                    <Divider />
                    <div style={{padding: 10}}>
                      {this.props.bottomList.map((item, index) => this.renderItem(item, index))}
                    </div>
                  </FormGroup>
                </FormControl>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button
          variant={"outlined"}
          style={{width: 32, height: 32, minWidth: 32}}
          onClick={this.onButtonClick}
        >
          <FilterIcon style={{color: "#999999"}} />
        </Button>
      </div>
    );
  }

  renderHeader() {
    if (!this.props.headerText) {
      return "";
    }
    return (
      <div style={{paddingTop: 10, paddingLeft: 10}}>
        <strong>{this.props.headerText}</strong>
      </div>
    );
  }

  renderItem(item: FilterItem, key: any) {
    return (
      <div key={key}>
        <FormControlLabel
          control={
            <Checkbox
              checked={item.selected}
              onChange={this.createSelectedChangeHandler(item.value)}
              name={item.value}
              style={{padding: 0, width: 32, height: 32}}
              icon={
                <CheckBoxOutlineBlankIcon style={{fontSize: 20, color: "rgba(158, 158, 158, 1)"}} />
              }
              checkedIcon={<CheckBoxIcon style={{fontSize: 20, color: "rgba(158, 158, 158, 1)"}} />}
            />
          }
          label={item.label}
        />
      </div>
    );
  }
}
