import React, {CSSProperties} from "react";
import {Service, SideBar, HSplit, VSplit, AppHeader, UserRole} from "frontend-common";

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

interface IProps {
  style?: CSSProperties
}

export class Main extends React.Component<IProps> {
  render() {
    return (
      <VSplit size={200}>
        <SideBar service={service} onSelect={onSideSelect} items={items} selected={'Dashboard'}/>
        <HSplit size={64}>
          <AppHeader user={{login: 'admin', role: UserRole.SERVICE_OWNER}}/>
          <div>
            Hello
          </div>
        </HSplit>
      </VSplit>
    );
  }
}
