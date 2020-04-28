import React, {CSSProperties} from "react";
import {Service, SideBar, HSplit, VSplit, AppHeader, UserRole, Panel, ContentHeader, DashboardFilter,
  DateFilter, DashboardChart, DonutChart, Paginator} from "frontend-common";

const service: Service = {
  identity: 'myService',
  description: "myService is very good",
  shortDescription: "this is service",
  did: 'ad56Dfd33',
  enabled: true,
  categories: [],
  countries: [],
  keywords: [],
  endpoint: 'http://lala',
  lastTouch: ''
};

const onSideSelect = (value: any) => {
  console.log(value, 'selected');
};

const items = [
  {label: 'Dashboard', value: 'Dashboard'},
  {label: 'Actions', value: 'Actions'},
  {label: 'Clients', value: 'Clients'},
  {label: 'Schemas', value: 'Schemas'},
  {label: 'Archive', value: 'Archive'},
  {label: 'Service Info', value: 'Service Info'},
  {label: 'Pin', value: 'Pin'},
];

const topItems = [
  {value: 'onboard', label: 'Onboarding', selected: true},
  {value: 'interacts', label: 'Interactions', selected: false},
  {value: 'creds', label: 'Issued credentials', selected: true},
];
const bottomItems = [
  {value: 'su', label: 'Sign Up', selected: true},
  {value: 'dip', label: 'Issue diploma', selected: false},
  {value: 'lec', label: 'Lectures', selected: true},
];

interface IProps {
  style?: CSSProperties
}

export class Main extends React.Component<IProps> {
  render() {
    return (
      <VSplit size={200} style={{height: '100%'}}>
        <SideBar service={service} onSelect={onSideSelect} items={items} selected={'Dashboard'}/>
        <HSplit size={64}>
          <AppHeader user={{login: 'admin', role: UserRole.SERVICE_OWNER}}/>
          <Panel>
            <div style={{paddingLeft: 24, paddingRight: 24}}>
            <ContentHeader>
              <h3>Text</h3>
              Here
              <div>Hell hello</div>
              <DateFilter/>
              <DashboardFilter topList={topItems} bottomList={bottomItems}/>
            </ContentHeader>
            <div>
              <DashboardChart/>
              <DonutChart/>
              Hello
            </div>
            <div>
              <Paginator/>
            </div>
            </div>
          </Panel>
        </HSplit>
      </VSplit>
    );
  }
}
