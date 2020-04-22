import * as React from 'react';
import {CSSProperties} from "react";
import {removeNullChildren} from "../utils/ReactUtil";

interface ISplitProps {
  style?: CSSProperties;
  size?: number;
  children: any;
  type: 'vertical' | 'horizontal';
}

class AbstractSplit extends React.Component<ISplitProps> {
  render() {
    const children = removeNullChildren(this.props.children);
    const size = this.props.size || '50%';
    const style: CSSProperties = {width: '100%', height: '100%', textAlign: 'left'};
    if (this.props.type === 'vertical') {
      return (
        <table cellPadding={0} cellSpacing={0} style={style}>
          <tbody>
          <tr>
            <td style={{width: size}}>{children[0]}</td>
            <td>{children[1]}</td>
          </tr>
          </tbody>
        </table>
      );
    }
    return (
      <table cellPadding={0} cellSpacing={0} style={style}>
        <tbody>
        <tr style={{height: size}}><td>{children[0]}</td></tr>
        <tr><td>{children[1]}</td></tr>
        </tbody>
      </table>
    );
  }
}

interface IProps {
  style?: CSSProperties;
  size?: number;
  children: any;
}

export class VSplit extends React.Component<IProps> {
  render() {
    return (
      <AbstractSplit type={'vertical'} style={this.props.style} size={this.props.size}>
        {this.props.children}
      </AbstractSplit>
    );
  }
}

export class HSplit extends React.Component<IProps> {
  render() {
    return (
      <AbstractSplit type={'horizontal'} style={this.props.style} size={this.props.size}>
        {this.props.children}
      </AbstractSplit>
    );
  }
}
