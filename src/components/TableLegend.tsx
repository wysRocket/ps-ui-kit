import {CSSProperties, default as React} from "react";

export interface TableLegendItem {
  name: string;
  value: number|string;
}

interface IProps {
  style?: CSSProperties;
  items: TableLegendItem[];
}

export default class TableLegend extends React.Component<IProps> {
  render() {
    return (
      <div style={this.props.style}>
        <div style={{display: 'flex', position: 'relative', alignItems: 'center', height: 'auto'}}>
          {this.props.items.map((item, index) => {
            return (
              <div key={index} style={{display: 'inline-flex', position: 'relative', flexDirection: 'column', alignItems: 'center', paddingRight: 30}}>
                <div>{item.name}: <strong>{item.value}</strong></div>
              </div>
            );
          })}
        </div>
      </div>
    );

  }
}
