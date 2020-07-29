import {CSSProperties, default as React} from "react";

interface IProps {
  style?: CSSProperties;
  label: string;
  bulletColor?: string;
}

export default class BulletItem extends React.Component<IProps> {
  render() {
    const style = this.props.style || {};
    return (
      <div style={{...style, display: 'flex', position: 'relative', alignItems: 'center', height: 'auto'}}>
        <span style={{fontSize: 30, paddingRight: 5, paddingBottom: 3, color: this.props.bulletColor || '#000000'}}>&bull;</span>{this.props.label}
      </div>
    );
  }
}
