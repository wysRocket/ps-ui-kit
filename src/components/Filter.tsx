import * as React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

interface IProps {
  filter: (text: string) => void;
}

export default class Filter extends React.Component<IProps> {
  state = {
    filterText: '',
  };

  onFilterChange = (e: any) => {
    const newFilter = e.target.value;
    this.setState({filterText: newFilter}, () => this.props.filter(newFilter));
  }

  render() {
    return (
      <TextField
        id="outlined-margin-dense"
        placeholder={'Search'}
        style={{width: 160, height: 32, marginTop: 0, marginBottom: 0}}
        margin="normal"
        variant="outlined"
      />
    );
  }
}
