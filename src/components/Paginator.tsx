import {CSSProperties, default as React} from "react";
import {Pagination} from "@material-ui/lab";
import {FormControl, Select, TextField} from "@material-ui/core";

interface IProps {
  style?: CSSProperties;
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  ranges?: number[];
  onPageChange: (value: number) => void;
  onPageSizeChange: (value: number) => void;
}

export default class Paginator extends React.Component<IProps> {
  onChange = (_: any, value: number) => {
    this.props.onPageChange(value);
  }

  onSizeChange = (evt: any) => {
    this.props.onPageSizeChange(evt.target.value);
  }

  render() {
    const ranges = this.props.ranges || [this.props.itemsPerPage, 2 * this.props.itemsPerPage, 3 * this.props.itemsPerPage];
    const numPages = Math.ceil(this.props.itemsTotal / this.props.itemsPerPage);
    const from = (this.props.currentPage - 1) * this.props.itemsPerPage + 1;
    const to = Math.min(this.props.itemsTotal, this.props.currentPage * this.props.itemsPerPage);
    return(
      <div style={this.props.style}>
        <div style={{display: 'flex', position: 'relative', alignItems: 'center', height: 'auto'}}>
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center', paddingRight: 32}}>
            Showing {from}-{to} from {this.props.itemsTotal}
          </div>
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            <FormControl variant="outlined">
              <Select
                native
                style={{height: 32, maxHeight: 32, marginTop: 0, marginBottom: 0}}
                value={this.props.itemsPerPage}
                onChange={this.onSizeChange}
                inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
              >
                {ranges.map((r, i) => {
                  return this.renderOption(r, i);
                })}
              </Select>
            </FormControl>
          </div>
          <div style={{flexGrow: 1}} />
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            <Pagination
              onChange={this.onChange}
              count={numPages}
              page={this.props.currentPage}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    );
  }

  renderOption(range: number, key: any) {
    return (
      <option key={key} value={range}>{range} per page</option>
    );
  }
}
