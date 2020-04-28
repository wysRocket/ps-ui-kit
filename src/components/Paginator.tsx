import {CSSProperties, default as React} from "react";
import {Pagination} from "@material-ui/lab";
import {FormControl, Select, TextField} from "@material-ui/core";

interface IProps {
  style?: CSSProperties;
}

export default class Paginator extends React.Component<IProps> {
  render() {
    return(
      <div>
        <div style={{display: 'flex', position: 'relative', alignItems: 'center', height: 'auto'}}>
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            Showing 1-10 from 56456
          </div>
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            <FormControl variant="outlined">
              <Select
                native
                style={{height: 32, maxHeight: 32, marginTop: 0, marginBottom: 0}}
                value={10}
                inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
              >
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={30}>30 per page</option>
              </Select>
            </FormControl>
          </div>
          <div style={{flexGrow: 1}} />
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>
    );
  }
}
