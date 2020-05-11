import React, {CSSProperties} from "react";
import {Service, SideBar, HSplit, VSplit, AppHeader, UserRole, Panel, ContentHeader, DashboardFilter,
  DateFilter, DashboardChart, DonutChart, Paginator, SearchBar, TableLegend, DataTable,
  deleteColumn, editColumn, idColumn, RendererProps, SelectRenderer, SortDirection, TabbedPanel} from "frontend-common";

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
  {label: 'Dashboard', value: 'Dashboard', link: 'db'},
  {label: 'Actions', value: 'Actions', link: 'act'},
  {label: 'Clients', value: 'Clients', link: 'cl'},
  {label: 'Schemas', value: 'Schemas', link: 'sc'},
  {label: 'Archive', value: 'Archive', link: 'ar'},
  {label: 'Service Info', value: 'Service Info', link: 'si'},
  {label: 'Pin', value: 'Pin', link: 'pin'},
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

const actions = [
  {identity: 'onboard', status: 'Active'},
  {identity: 'checkin', status: 'Active'},
  {identity: 'signIn', status: 'Archived'},
];

const onSort = (s: any) => {
  console.log('sorted', s);
};


interface IProps {
  style?: CSSProperties
}

export class Main extends React.Component<IProps> {
  state = {
    tab: 1,
    currentPage: 4,
    itemsPerPage: 10,
  };
  onTabChange = (v: any) => {
    console.log('tab change', v);
    this.setState({tab: v});
  };
  onPageChange = (v: number) => {
    this.setState({currentPage: v})
  };

  onPageSizeChange = (v: number) => {
    this.setState({itemsPerPage: v});
  };

  render() {
    const height = document.documentElement.clientHeight - 65;
    return (
      <VSplit size={200} style={{height: '100%'}}>
        <SideBar service={service} onSelect={onSideSelect} items={items} selected={'Dashboard'}/>
        <HSplit size={64}>
          <AppHeader user={{login: 'admin', role: UserRole.SERVICE_OWNER}}/>
          <Panel style={{height}}>
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
                <Paginator
                  currentPage={this.state.currentPage}
                  itemsPerPage={this.state.itemsPerPage}
                  ranges={[10, 20, 30]}
                  itemsTotal={168}
                  onPageChange={this.onPageChange}
                  onPageSizeChange={this.onPageSizeChange}
                />
              </div>
              <TabbedPanel
                tabItems={[{label: 'One Credentials', value: 1, link: 'one'}, {label: 'Two Schemas', value: 2, link: 'two'}, {label: 'Tree', value: 3, link: 'tree'}]}
                selectedTabValue={this.state.tab}
                onTabChange={this.onTabChange}
              >
                Content
              </TabbedPanel>
              <TableLegend items={[{name: 'Total', value: '68'}, {name: 'Issued', value: '14'}, {name: 'Draft', value: '14'}]}/>
              <SearchBar
                style={{paddingLeft: 16, paddingRight: 16, paddingTop: 32, paddingBottom: 32, border: '1px solid rgba(199, 199, 199, 1.0'}}
                filters={[
                  {id: 'status', items: [{label: 'All', value: 'all'}, {label: 'Draft', value: 'draft'}]},
                  {id: 'interactions', items: [{label: 'All', value: 'all'}, {label: 'Success', value: 'success'}, {label: 'Fail', value: 'fail'}]},
                ]}
                rightHint={'Total: 267'}
              />
              <DataTable
                columns={[
                  idColumn('name'),
                  {
                    fieldId: 'status',
                    enumValues: ['Active', 'Archived', 'Stopped', 'Paused'],
                    header: {title: 'Status', sortable: true},
                    renderer: (props: RendererProps) => (<SelectRenderer value={props.value} enumValues={props.enumValues} onChange={props.onChange}/>)
                  },
                  editColumn(),
                  deleteColumn(),
                ]}
                data={actions}
                onSort={onSort}
                sort={{direction: SortDirection.ASC, field: 'identity'}}
              />
            </div>
          </Panel>
        </HSplit>
      </VSplit>
    );
  }
}
