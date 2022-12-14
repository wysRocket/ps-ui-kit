import {Component, CSSProperties, FC, ReactNode} from "react";
import DefaultIcon from "@mui/icons-material/InsertPhoto";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Panel from "../Panel";
import {Service} from "../../domain/Service";
import IconPreview from "../IconPreview";
import {Link} from "react-router-dom";
import * as Styles from "../DefaultStyles";
import {makeStyles} from "@mui/styles";

export interface SideBarItem {
  label: string;
  icon?: (p: {style?: CSSProperties}) => ReactNode;
  value: any;
  link: string;
  isExternalLink?: boolean;
}

const useStyles = () =>
  makeStyles({
    root: {
      "&$selected": {
        backgroundColor: Styles.SideBar.Color.ACTIVE_ITEM_BG,
        borderRadius: 4,
        "&:hover": {
          backgroundColor: Styles.SideBar.Color.HOVERED
        }
      },
      "&:hover": {
        backgroundColor: Styles.SideBar.Color.HOVERED,
        borderRadius: 4
      }
    },
    selected: {}
  });

interface ItemComponentProps {
  item: SideBarItem;
  selected?: boolean;
  onClick?: (value: any) => void;
  minimized?: boolean;
}

const ItemComponent: FC<ItemComponentProps> = ({item, minimized, selected, onClick}) => {
  const style: CSSProperties = {padding: Styles.Padding.XS};
  const classes = useStyles();

  const renderText = () =>
    !minimized ? (
      <ListItemText
        style={{
          color: selected ? Styles.SideBar.Color.ACTIVE_TEXT : Styles.SideBar.Color.TEXT
        }}
        primary={
          <span style={{fontWeight: 600, fontSize: Styles.SideBar.Size.FONT_SIZE}}>
            {item.label}
          </span>
        }
      />
    ) : (
      ""
    );

  const iconStyle: CSSProperties = {minWidth: 40};
  if (minimized) {
    iconStyle.minWidth = 0;
  }
  const colorStyle = {
    color: selected ? Styles.SideBar.Color.ACTIVE_ICON : Styles.SideBar.Color.ICON
  };
  const cProps = item.isExternalLink
    ? {component: "a", href: item.link, target: "_blank"}
    : {component: Link, to: item.link};
  return (
    <ListItem
      button={true}
      style={style}
      //    classes={{root: classes.root, selected: classes.selected}}
      selected={selected}
      onClick={() => onClick?.(item.value)}
      {...cProps}
    >
      <ListItemIcon style={iconStyle}>
        <div
          style={{
            width: Styles.Padding.M,
            height: Styles.Padding.M
            /*backgroundColor: '#E7E7E7',
          border: '1px solid rgba(199, 199, 199, 1.0)',
          borderRadius: 3*/
          }}
        >
          {item.icon ? item.icon({style: colorStyle}) : <DefaultIcon style={colorStyle} />}
        </div>
      </ListItemIcon>
      {renderText()}
    </ListItem>
  );
};

export interface IProps {
  style?: CSSProperties;
  menuItemsStyle?: CSSProperties;
  logoBarStyle?: CSSProperties;
  items: SideBarItem[];
  selected?: any;
  onSelect: (value: any) => void;
  minimized?: boolean;
  service: Service;
  poweredByLabel?: string;
  poweredByElement?: any;
  zakaLabel?: string;
}

export default class SideBar extends Component<IProps> {
  render() {
    const {items, selected, service} = this.props;
    return (
      <Panel style={{backgroundColor: Styles.SideBar.Color.BG}}>
        <div
          style={{
            /*borderRight: '1px solid rgba(199, 199, 199, 1.0',*/ height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              height: 94,
              paddingLeft: this.props.minimized ? 8 : 16,
              paddingTop: 16,
              color: "#6C6C6C",
              ...this.props.logoBarStyle
            }}
          >
            <div style={{float: "left", minWidth: this.props.minimized ? 40 : 48}}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#E7E7E7",
                  border: "1px solid rgba(199, 199, 199, 1.0)",
                  borderRadius: 3
                }}
              >
                {this.renderLogo(service.logo)}
              </div>
            </div>
            <div style={{paddingTop: 5, fontSize: 20}}>
              {this.props.minimized ? "" : service.identity}
            </div>
          </div>
          <Panel style={this.props.menuItemsStyle}>
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
          </Panel>
          <div style={{flexGrow: 1}} />
          {this.renderCopyright()}
        </div>
      </Panel>
    );
  }

  renderLogo(logo?: string) {
    if (!logo) {
      return <DefaultIcon style={{width: 40, height: 40}} />;
    }
    return <IconPreview icon={`${logo}`} minSize={40} maxSize={40} />;
  }

  renderCopyright() {
    if (this.props.minimized) {
      return "";
    }
    return (
      <div style={{paddingLeft: Styles.Padding.M, paddingBottom: Styles.Padding.L}}>
        <div style={{fontSize: 14, fontFamily: "Helvetica", color: "#636363"}}>
          {this.props.poweredByLabel || "Powered by"}
        </div>
        {this.renderPoweredByChild()}
      </div>
    );
  }

  renderPoweredByChild() {
    if (this.props.poweredByElement) {
      return this.props.poweredByElement;
    }

    return (
      <div style={{fontSize: 24, fontWeight: "bold", color: "#636363"}}>
        {this.props.zakaLabel || "ZAKA"}
      </div>
    );
  }
}
