import {CSSProperties, default as React} from "react";
import {ClickAwayListener, Fade, Paper, Popper, PopperPlacementType} from "@mui/material";
import ContentHeader from "./ContentHeader";
import Filter from "./Filter";
import {LabeledItem} from "../domain/Item";
import {CheckBoxInGroup} from "./Forms";

import * as Buttons from "./Buttons";
import * as Styles from "./DefaultStyles";
import Panel from "./Panel";
import AlignedHGroup from "./AlignedHGroup";

export interface ItemInGroup extends LabeledItem {
  extLabel?: string;
  disabled?: boolean;
}

interface IProps {
  style?: CSSProperties;
  filterStyle?: CSSProperties;
  paperStyle?: CSSProperties;
  mainHeaderElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  filter?: string;
  filterPlaceholder?: string;
  onFilterChange?: (filter: string) => void;
  items: ItemInGroup[];
  itemRenderer?: (item: ItemInGroup, index?: number) => React.ReactNode;
  selected?: any[];
  onSelectionChange?: (value: any) => void;
}

export class ItemsGroup extends React.Component<IProps> {
  render() {
    return (
      <Paper style={this.props.paperStyle}>
        <div style={{padding: Styles.Padding.XS}}>
          {this.props.mainHeaderElement}
          {this.renderHeader()}
          {this.renderItems()}
        </div>
      </Paper>
    );
  }

  renderHeader() {
    const handler = this.props.onFilterChange;
    if (handler === undefined && !this.props.headerElement) {
      return "";
    }
    return (
      <ContentHeader style={{height: Styles.Padding.XL}}>
        {this.renderFilter()}
        {this.props.headerElement}
      </ContentHeader>
    );
  }

  renderFilter() {
    const handler = this.props.onFilterChange;
    if (handler === undefined) {
      return <div />;
    }
    return (
      <div>
        <Filter
          style={this.props.filterStyle}
          filterText={this.props.filter}
          filter={handler}
          placeholder={this.props.filterPlaceholder}
        />
      </div>
    );
  }

  renderItems() {
    return (
      <Panel style={this.props.style}>
        {this.props.items.map((item, index) => {
          const renderer = this.props.itemRenderer;
          if (renderer === undefined) {
            return "";
          }
          return renderer(item, index);
        })}
      </Panel>
    );
  }
}

export class CheckboxItemsGroup extends React.Component<IProps> {
  render() {
    return (
      <Paper style={this.props.paperStyle}>
        <div style={{padding: Styles.Padding.XS}}>
          {this.renderHeader()}
          {this.renderItems()}
        </div>
      </Paper>
    );
  }

  renderHeader() {
    const handler = this.props.onFilterChange;
    if (handler === undefined && !this.props.headerElement) {
      return "";
    }
    return (
      <ContentHeader style={{height: Styles.Padding.XL}}>
        {this.renderFilter()}
        {this.props.headerElement}
      </ContentHeader>
    );
  }

  renderFilter() {
    const handler = this.props.onFilterChange;
    if (handler === undefined) {
      return <div />;
    }
    return (
      <div>
        <Filter
          style={this.props.filterStyle}
          filterText={this.props.filter}
          filter={handler}
          placeholder={this.props.filterPlaceholder}
        />
      </div>
    );
  }

  createSelectionHandler = (value: any) => () => {
    const handler = this.props.onSelectionChange;
    if (handler === undefined) {
      return;
    }
    handler(value);
  };

  renderItems() {
    const selectedSet = new Set(this.props.selected);
    return (
      <Panel style={this.props.style}>
        {this.props.items.map((item, index) => {
          return (
            <AlignedHGroup key={index} style={{width: "100%"}}>
              <CheckBoxInGroup
                key={index}
                disabled={item.disabled}
                checked={selectedSet.has(item.value)}
                label={item.label}
                onChange={this.createSelectionHandler(item.value)}
              />
              <div style={{paddingLeft: Styles.Padding.S}}>{item.extLabel}</div>
            </AlignedHGroup>
          );
        })}
      </Panel>
    );
  }
}

interface BtnProps extends IProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  menuMaxHeight?: number;
  menuWidth?: number;
  placement?: PopperPlacementType;
  label: string;
  disabled?: boolean;
  popperStyle?: CSSProperties;
}

export class ButtonWithCheckboxItems extends React.Component<BtnProps> {
  state = {
    opened: false,
    anchorEl: undefined
  };

  onButtonClick = (evt: any) => {
    const opened = !this.state.opened;
    this.setState({opened, anchorEl: evt.currentTarget});
  };

  onClickAway = () => {
    this.setState({opened: false});
  };

  render() {
    const style: CSSProperties = this.props.style || {};
    const s = this.props.style || {};
    const menuWidth = this.props.menuWidth || s.width;
    // const ws = menuWidth ? {width: menuWidth} : {};
    return (
      <ClickAwayListener onClickAway={this.onClickAway}>
        <div>
          <Popper
            style={this.props.popperStyle}
            open={this.state.opened}
            anchorEl={this.state.anchorEl}
            placement={this.props.placement || "top-start"}
            transition
          >
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={200}>
                <CheckboxItemsGroup
                  style={{height: this.props.menuMaxHeight || 200, width: menuWidth}}
                  items={this.props.items}
                  selected={this.props.selected}
                  onSelectionChange={this.props.onSelectionChange}
                  headerElement={this.props.headerElement}
                  filter={this.props.filter}
                  filterStyle={this.props.filterStyle}
                  filterPlaceholder={this.props.filterPlaceholder}
                  onFilterChange={this.props.onFilterChange}
                />
              </Fade>
            )}
          </Popper>
          <Buttons.Orange
            style={style}
            onClick={this.onButtonClick}
            startIcon={this.props.startIcon}
            endIcon={this.props.endIcon}
            label={this.props.label}
          />
        </div>
      </ClickAwayListener>
    );
  }
}
