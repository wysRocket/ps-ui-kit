import * as React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {CSSProperties} from "react";

interface IProps {
  style?: CSSProperties;
  filterText?: string;
  filter: (text: string) => void;
  placeholder?: string;
}

export default class Filter extends React.Component<IProps> {
  state = {
    filterText: '',
  };

  componentWillMount() {
    this.setState({filterText: this.props.filterText || ''});
  }

  onFilterChange = (e: any) => {
    const newFilter = e.target.value;
    this.setState({filterText: newFilter}, () => this.props.filter(newFilter));
  }

  render() {
    const style = this.props.style || {};
    return (
      <TextField
        placeholder={this.props.placeholder || 'Search'}
        style={{width: 160, height: 32, maxHeight: 32, marginTop: 0, marginBottom: 0, ...style}}
        inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
        InputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
        margin={'normal'}
        variant="outlined"
        value={this.state.filterText}
        onChange={this.onFilterChange}
      />
    );
  }
}
