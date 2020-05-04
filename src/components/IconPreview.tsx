import * as React from 'react';
import PreviewIcon from '@material-ui/icons/InsertPhoto';

interface IProps {
  icon?: string;
  minSize?: number;
  maxSize?: number;
}

export default class IconPreview extends React.Component<IProps> {
  render() {
    const minSize = this.props.minSize || 100;
    const maxSize = this.props.maxSize || 200;
    return (
      <div style={{minWidth: minSize, minHeight: minSize, backgroundColor: '#e3e3e3'}}>
        {this.renderIcon(minSize, maxSize)}
      </div>
    );
  }

  renderIcon(minSize: number, maxSize: number) {
    const icon = this.props.icon;
    if (!icon) {
      return (
        <PreviewIcon style={{width: minSize, height: minSize, color: 'rgb(97, 97, 104)'}}/>
      );
    }
    return (
      <img style={{maxWidth: maxSize, maxHeight: maxSize, minWidth: minSize, minHeight: minSize}} src={icon} alt={''}/>
    );
  }
}
