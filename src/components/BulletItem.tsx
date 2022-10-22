import Box from "@mui/material/Box";
import {Component, CSSProperties} from "react";

interface IProps {
  style?: CSSProperties;
  label: string;
  bulletColor?: string;
}

export default class BulletItem extends Component<IProps> {
  render() {
    const {style, bulletColor, label} = this.props;
    return (
      <Box
        sx={{
          ...style,
          display: "flex",
          position: "relative",
          alignItems: "center",
          height: "auto"
        }}
      >
        <Box
          component="span"
          sx={{fontSize: 30, paddingRight: 5, paddingBottom: 3, color: bulletColor || "#000000"}}
        >
          &bull;
        </Box>
        {label}
      </Box>
    );
  }
}
