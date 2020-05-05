import {CSSProperties, default as React} from "react";
import Panel from "./Panel";
import {Tab, Tabs} from "@material-ui/core";

export interface TabItem {
  label: string;
  value: any;
}

interface IProps {
  style?: CSSProperties;
  children?: any;
  tabItems: TabItem[];
  selectedTabValue: any;
  onTabChange: (newTabValue: any) => void;
}

export default class TabbedPanel extends React.Component<IProps> {
  onChange = (_: any, value: any) => {
    this.props.onTabChange(value);
  }

  render() {
    return (
      <Panel style={this.props.style} toolbarProps={{
        children: [(
          <Tabs
            key={1}
            value={this.props.selectedTabValue}
            TabIndicatorProps={{style: {backgroundColor: '#B3B3B3'}}}
            style={{borderBottom: '1px solid #C7C7C7', minHeight: 32, width: '100%', paddingLeft: 32}}
            onChange={this.onChange}
          >
            {this.props.tabItems.map((item, index) => {
              return (
                <Tab
                  key={index}
                  value={item.value}
                  label={item.label}
                  style={{minWidth: 10, padding: 0, minHeight: 32, marginRight: 32, textTransform: 'none'}}
                />
              );
            })}
          </Tabs>
        )],
        style: {height: 36}
      }}>
        {this.props.children}
      </Panel>
    );
  }
}
