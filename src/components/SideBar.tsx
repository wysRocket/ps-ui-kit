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
import {Link} from "react-router-dom";
import * as Styles from "./DefaultStyles";
import {makeStyles} from "@material-ui/core/styles";

export interface SideBarItem {
  label: string;
  icon?: any;
  value: any;
  link: string;
}

const useStyles = makeStyles({
  root: {
    '&$selected': {
      'backgroundColor': Styles.SideBar.Color.ACTIVE_ITEM_BG,
      'borderRadius': 4,
      '&:hover': {
        backgroundColor: Styles.SideBar.Color.HOVERED,
      }
    },
    '&:hover': {
      backgroundColor: Styles.SideBar.Color.HOVERED,
      borderRadius: 4
    }
  },
  selected: {},
});

interface ItemComponentProps {
  item: SideBarItem;
  selected?: boolean;
  onClick?: (value: any) => void;
  minimized?: boolean;
}

const ItemComponent: React.FC<ItemComponentProps> = (props) => {
  const item = props.item;
  const style: CSSProperties = {padding: Styles.Padding.XS};
  const classes = useStyles();
  const onClick = () => {
    const handler = props.onClick;
    if (handler !== undefined) {
      handler(props.item.value);
    }
  };
  const renderText = () => {
    if (props.minimized) {
      return '';
    }
    return (
      <ListItemText
        style={{
          color: props.selected ? Styles.SideBar.Color.ACTIVE_TEXT : Styles.SideBar.Color.TEXT
        }}
        primary={(<span style={{fontWeight: 600, fontSize: Styles.SideBar.Size.FONT_SIZE}}>{item.label}</span>)}
      />
    );
  };
  const iconStyle: CSSProperties = {minWidth: 40};
  if (props.minimized) {
    iconStyle.minWidth = 0;
  }
  return (
    <ListItem
      button={true}
      style={style}
      classes={{root: classes.root, selected: classes.selected}}
      selected={props.selected}
      onClick={onClick}
      component={Link}
      to={item.link}
    >
      <ListItemIcon style={iconStyle}>
        <div style={{
          width: Styles.Padding.M,
          height: Styles.Padding.M,
          /*backgroundColor: '#E7E7E7',
          border: '1px solid rgba(199, 199, 199, 1.0)',
          borderRadius: 3*/
        }}>
          {props.item.icon ? props.item.icon : (<DefaultIcon style={{color: props.selected ? Styles.SideBar.Color.ACTIVE_ICON : Styles.SideBar.Color.ICON}}/>)}
        </div>
      </ListItemIcon>
      {renderText()}
    </ListItem>
  );
};

interface IProps {
  style?: CSSProperties;
  items: SideBarItem[];
  selected?: any;
  onSelect: (value: any) => void;
  minimized?: boolean;
  service: Service;
}

export default class SideBar extends React.Component<IProps> {
  render() {
    const {items, selected, service} = this.props;
    return (
      <Panel style={{backgroundColor: Styles.SideBar.Color.BG}}>
        <div style={{/*borderRight: '1px solid rgba(199, 199, 199, 1.0',*/ height: '100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{height: 94, paddingLeft: this.props.minimized ? 8 : 16, paddingTop: 16, color: '#6C6C6C'}}>
            <div style={{float: 'left', minWidth: this.props.minimized ? 40 : 48}}>
              <div style={{width: 40, height: 40, backgroundColor: '#E7E7E7', border: '1px solid rgba(199, 199, 199, 1.0)', borderRadius: 3}}>
                {this.renderLogo(service.logo)}
              </div>
            </div>
            <div style={{paddingTop: 5, fontSize: 20}}>
              {this.props.minimized ? '' : service.identity}
            </div>
          </div>
          <List style={{paddingRight: Styles.Padding.XS, paddingLeft: Styles.Padding.XS}}>
            {items.map((item, index) => (
              <ItemComponent
                key={index}
                item={item}
                onClick={this.props.onSelect}
                selected={selected && selected === item.value}
                minimized={this.props.minimized}
              />
            ))}
          </List>
          <div style={{flexGrow: 1}}/>
          {this.renderCopyright()}
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

  renderCopyright() {
    if (this.props.minimized) {
      return '';
    }
    return (
      <div style={{paddingLeft: Styles.Padding.M, paddingBottom: Styles.Padding.L}}>
        <div style={{fontSize: 14, fontFamily: 'Helvetica', color: '#636363'}}>Powered by</div>
        <div style={{fontSize: 24, fontWeight: 'bold', color: '#636363'}}>ZAKA</div>
      </div>
    );
  }
}
