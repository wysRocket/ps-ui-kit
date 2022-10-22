import {CSSProperties, default as React} from "react";
import { Pagination } from '@mui/material';
import DropSelector from "./DropSelector";

interface IProps {
  style?: CSSProperties;
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  ranges?: number[];
  onPageChange: (value: number) => void;
  onPageSizeChange: (value: number) => void;
  showingLabelFunction?: (...args: any[]) => string;
}

export default class Paginator extends React.Component<IProps> {
  onChange = (_: any, value: number) => {
    this.props.onPageChange(value);
  };

  onPageChange = (v: number) => {
    this.props.onPageSizeChange(v);
  };

  render() {
    const ranges = this.props.ranges || [10, 20, 30];
    const numPages = Math.ceil(this.props.itemsTotal / this.props.itemsPerPage);
    const from = (this.props.currentPage - 1) * this.props.itemsPerPage + 1;
    const to = Math.min(this.props.itemsTotal, this.props.currentPage * this.props.itemsPerPage);
    const lf = (...args: any[]) => {
      if (this.props.showingLabelFunction !== undefined) {
        return this.props.showingLabelFunction(...args);
      }
      let str = "Showing {0}-{1} of {2}";
      if (args && args.length) {
        args.forEach((p, i) => {
          str = str.replace(`{${i}}`, p);
        });
      }

      return str;
    };
    return (
      <div style={this.props.style}>
        <div style={{display: "flex", position: "relative", alignItems: "center", height: "auto"}}>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              paddingRight: 32
            }}
          >
            {lf(from, to, this.props.itemsTotal)}
          </div>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <DropSelector
              selected={this.props.itemsPerPage}
              items={ranges.map((r) => ({label: `${r}`, value: r}))}
              onChange={this.onPageChange}
            />
          </div>
          <div style={{flexGrow: 1}} />
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Pagination onChange={this.onChange} count={numPages} page={this.props.currentPage} />
          </div>
        </div>
      </div>
    );
  }

  renderOption(range: number, key: any) {
    return (
      <option key={key} value={range}>
        {range} per page
      </option>
    );
  }
}
