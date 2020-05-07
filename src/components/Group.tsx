import {CSSProperties, default as React} from "react";
import {removeNullChildren} from "../utils/ReactUtil";

interface IProps {
  style?: CSSProperties;
  children: any;
}

export class HGroup extends React.Component<IProps> {
  render() {
    const children = removeNullChildren(this.props.children);
    const style = this.props.style || {};
    return (
      <div style={{...style, whiteSpace: "nowrap"}}>
        {children.map((c, i) => this.renderChild(c, i))}
      </div>
    );
  }

  renderChild(child: any, key: any) {
    return (
      <div key={key} style={{display: 'inline-block'}}>{child}</div>
    );
  }
}
