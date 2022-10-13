import {CSSProperties, default as React} from "react";
import * as Styles from "./DefaultStyles";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  style?: CSSProperties;
  number: number;
  onRemove?: () => void;
  children: any;
}

export default class NumberedContainer extends React.Component<IProps> {

  render() {
    const style = this.props.style || {width: 635, height: 136, backgroundColor: '#FAFAFA'};
    const divStyle: CSSProperties = {display: 'inline-flex'};
    return (
      <div style={{borderRadius: 4, border: '1px solid #E3E4E5', ...style}}>
        <div style={{display: 'flex'}}>
          <div style={divStyle}>
            <div style={{
              width: Styles.Padding.M,
              height: Styles.Padding.M,
              backgroundColor: '#EFEFEF',
              textAlign: 'center',
              borderBottom: '1px solid #E3E4E5',
              borderRight: '1px solid #E3E4E5',
              borderBottomRightRadius: 4,
              fontWeight: 'bold'
            }}>
              {this.props.number}
            </div>
          </div>
          <div style={divStyle}>
            {this.props.children}
          </div>
          <div style={{flexGrow: 1}} />
          <div style={divStyle}>
            {this.renderDelete()}
          </div>
        </div>
      </div>
    );
  }

  renderDelete() {
    const onRemove = this.props.onRemove;
    if (onRemove === undefined) {
      return '';
    }
    return (
      <div>
        <IconButton onClick={this.props.onRemove} size="large">
          <CloseIcon style={{color: Styles.Icon.Button.COLOR}}/>
        </IconButton>
      </div>
    );
  }
}
