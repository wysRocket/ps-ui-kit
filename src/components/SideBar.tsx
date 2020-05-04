import * as React from 'react';
import {CSSProperties} from "react";
import DefaultIcon from "@material-ui/icons/InsertPhoto";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Panel from "./Panel";
import {Service} from "../domain/Service";
import IconPreview from "./IconPreview";

export interface SideBarItem {
  label: string;
  icon?: any;
  value: any;
}

interface ItemComponentProps {
  item: SideBarItem;
  selected?: boolean;
  onClick: (value: any) => void;
}

class ItemComponent extends React.Component<ItemComponentProps> {
  onClick = () => {
    this.props.onClick(this.props.item.value);
  }

  render() {
    const item = this.props.item;
    return (
      <ListItem button={true} selected={this.props.selected} onClick={this.onClick}>
        <ListItemIcon style={{minWidth: 40}}>
          <div style={{width: 24, height: 24, backgroundColor: '#E7E7E7', border: '1px solid rgba(199, 199, 199, 1.0)', borderRadius: 3}}>
          {this.renderIcon()}
          </div>
        </ListItemIcon>
        <ListItemText style={{color: '#6C6C6C'}} primary={item.label} />
      </ListItem>
    );
  }

  private renderIcon() {
    if (this.props.item.icon) {
      return this.props.item.icon;
    }
    return (
      <DefaultIcon/>
    );
  }
}

interface IProps {
  style?: CSSProperties;
  items: SideBarItem[];
  selected?: any;
  onSelect: (value: any) => void;
  service: Service;
}

export default class SideBar extends React.Component<IProps> {
  render() {
    const {items, selected, service} = this.props;
    return (
      <Panel style={{backgroundColor: '#F0F0F0'}}>
        <div style={{borderRight: '1px solid rgba(199, 199, 199, 1.0', height: '100%'}}>
        <div style={{height: 94, paddingLeft: 16, paddingTop: 16, color: '#6C6C6C'}}>
          <div style={{float: 'left', minWidth: 48}}>
            <div style={{width: 40, height: 40, backgroundColor: '#E7E7E7', border: '1px solid rgba(199, 199, 199, 1.0)', borderRadius: 3}}>
              {this.renderLogo(service.logo)}
            </div>
          </div>
          <div style={{paddingTop: 10}}>
            {service.identity}
          </div>
        </div>
        <List>
          {items.map((item, index) => (
            <ItemComponent key={index} item={item} onClick={this.props.onSelect} selected={selected && selected === item.value}/>
          ))}
        </List>
        </div>
      </Panel>
    );
  }

  renderLogo(logo?: string) {
    if (!logo) {
      return (
        <DefaultIcon style={{width: 40, height: 40}}/>
      );
    }
    return (
      <IconPreview icon={`${logo}`} minSize={40} maxSize={40}/>
    );
  }
}
