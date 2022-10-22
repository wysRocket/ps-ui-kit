import {Component, CSSProperties} from "react";
import Box from "@mui/material/Box";

export interface TableLegendItem {
  name: string;
  value: number | string;
}

interface IProps {
  style?: CSSProperties;
  items: TableLegendItem[];
}

export default class TableLegend extends Component<IProps> {
  render() {
    return (
      <Box sx={this.props.style}>
        <Box sx={{display: "flex", position: "relative", alignItems: "center", height: "auto"}}>
          {this.props.items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                paddingRight: 30
              }}
            >
              <div>
                {item.name}: <strong>{item.value}</strong>
              </div>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
