import {CSSProperties, default as React} from "react";
import {TextField} from "@material-ui/core";
import DropSelector, {DropSelectorItem} from "./DropSelector";

export interface SearchFilter {
  id: string;
  items: DropSelectorItem[];
  selected?: any;
}

interface IProps {
  style?: CSSProperties;
  showBorder?: boolean;
  filters?: SearchFilter[];
  rightHint?: string;
}

export default class SearchBar extends React.Component<IProps> {

  createFilterHandler = (id: string) => (value: any) => {
    console.log('filter', id, value);
  }

  render() {
    const filters = this.props.filters || [];
    return (
      <div style={this.props.style}>
        <div style={{display: 'flex', position: 'relative', alignItems: 'center', height: 'auto'}}>
          <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
            {this.renderSearchField()}
          </div>
          {filters.map((filter, index) => {
            return (
              <div key={index} style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center', paddingLeft: 30}}>
                <DropSelector
                  items={filter.items}
                  selected={filter.selected}
                  onChange={this.createFilterHandler(filter.id)}/>
              </div>
            );
          })}
          <div style={{flexGrow: 1}} />
            <div style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
              {this.props.rightHint}
            </div>
        </div>
      </div>
    );
  }

  renderSearchField() {
    return (
      <TextField
        placeholder={'Search'}
        style={{width: 270, height: 32, maxHeight: 32, marginTop: 0, marginBottom: 0}}
        inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
        InputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
        margin={'normal'}
        variant="outlined"
      />
    );
  }
}
