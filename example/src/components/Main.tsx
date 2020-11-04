import React, {CSSProperties} from "react";
import {Service, SideBar, HSplit, VSplit, AppHeader, UserRole, Panel, ContentHeader, DashboardFilter,
  DateFilterButton, DashboardChart, DonutChart, Paginator, SearchBar, TableLegend, DataTable,
  deleteColumn, editColumn, idColumn, RendererProps, SelectRenderer, SortDirection, TabbedPanel, PopUp,
  Tree, idLink, ConfirmButton, DonutChartItem, ButtonMenuItem, HGroup, AlignedHGroup, BulletItem, ButtonWithMenu,
  DateRange
} from "frontend-common";
import {Button} from "@material-ui/core";
import EyeIcon from "@material-ui/icons/Visibility";
import HideIcon from "@material-ui/icons/VisibilityOff";
import MoveIcon from "@material-ui/icons/OpenWith";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";

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

const chartItems: DonutChartItem[] = [
  {label: 'Failed', value: 3, color: '#FF0000'},
  {label: 'Complete', value: 47, color: '#26C446'},
  {label: 'Pending', value: 15, color: '#359EDE'},
];

const appMenuItems: ButtonMenuItem[] = [
  {label: 'Admin view', onClick: () => console.log('view click')},
  {label: 'Settings', onClick: () => console.log('settings click')},
  {label: 'Sign out', onClick: () => console.log('sign out click')},
];

const changeMenuItems: ButtonMenuItem[] = [
  {label: 'View action', icon: (<EyeIcon/>), onClick: () => console.log('view click')},
  {label: 'Hide chart', icon: (<HideIcon/>), onClick: () => console.log('hide click')},
  {label: 'Move chart', icon: (<MoveIcon/>), onClick: () => console.log('move click')},
];

const filterMenuItems: ButtonMenuItem[] = [
  {label: 'Ok',icon: (<CheckIcon style={{color: '#FF0000'}}/>), onClick: () => console.log('view click')},
  {label: 'H1: 0', icon: (<CheckIcon style={{color: '#FFFFFF', opacity: 0}}/>), onClick: () => console.log('hide click')},
  {label: 'Some', icon: (<CheckIcon style={{color: '#FFFFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
];

const roomItems: ButtonMenuItem[] = [
  {label: 'Room 1', icon: (<CheckIcon style={{color: '#FF0000'}}/>), onClick: () => console.log('view click')},
  {label: 'Room 2', icon: (<CheckIcon style={{color: '#FFFFFF', opacity: 0}}/>), onClick: () => console.log('hide click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
  {label: 'Room 3', icon: (<CheckIcon style={{color: '#00FFFF', opacity: 0}}/>), onClick: () => console.log('move click')},
];

const onSort = (s: any) => {
  console.log('sorted', s);
};

const randomizeArray = (arg: any[]) => {
  const array = arg.slice();
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const yLabels = [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`);
const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35,
  41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

interface IProps {
  style?: CSSProperties
}

export class Main extends React.Component<IProps> {
  state = {
    tab: 1,
    currentPage: 4,
    itemsPerPage: 10,
    popupOpened: false,
    selected: ['pv2'],
    textFilter: '',
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

  onPopupOpen = () => {
    this.setState({popupOpened: true});
  };

  onPopupClose = () => {
    this.setState({popupOpened: false});
  };

  onTreeSelect = (selected: any) => {
    console.log('selected', selected);
    this.setState({selected});
  };

  onSave = () => {
    console.log('save')
  };

  onPublish = () => {
    console.log('publish')
  };

  onTextFilterChange = (f: string) => {
    console.log('filter', f);
    this.setState({textFilter: f});
  };

  onDateRangeChange = (prop: string, range: DateRange) => {
    console.log('date range changed', prop, range);
  };

  render() {
    const height = document.documentElement.clientHeight - 65;
    return (
      <VSplit size={200} style={{height: '100%'}}>
        <SideBar service={service} onSelect={onSideSelect} items={items} selected={'Dashboard'}/>
        <HSplit size={64}>
          <AppHeader user={{login: 'admin', role: UserRole.SERVICE_OWNER}} menuItems={appMenuItems} notifications={3}/>
          <Panel style={{height}}>
            <PopUp title={'Parameters and instances'} opened={this.state.popupOpened} onClose={this.onPopupClose}>
              <Tree elements={[
                {
                  content: {label: "rssh-ts", value: 'rssh-t4'},
                  children: [
                    {
                      content: {label: "Schema1", value: 's1'},
                      children: [{content: {label: 'v1', value: 'v1'}}]
                    },
                    {
                      content: {label: "Schema2", value: 's2'},
                      children: [{content: {label: 'v2', value: 'v2'}}]
                    },
                  ]
                },
                {
                  content: {label: "Zaka Service", value: 'zaka'},
                  children: [
                    {
                      content: {label: "Push Notification", value: 'p1'},
                      children: [{content: {label: '1.0', value: 'pv1'}}]
                    },
                    {
                      content: {label: "Profile", value: 'p2'},
                      children: [{content: {label: '1.2', value: 'pv2'}}]
                    },
                  ]
                }
              ]} onSelect={this.onTreeSelect} expandSelected={true} selected={this.state.selected}/>
            </PopUp>
            <div style={{paddingLeft: 24, paddingRight: 24}}>
              <ContentHeader>
                <h3>Text</h3>
                Here
                <div>Hell hello</div>
                <DateFilterButton items={[{label: 'one', value: '1'}, {label: 'two', value: 2}]} onRangeChanged={this.onDateRangeChange}/>
                <DashboardFilter topList={topItems} bottomList={bottomItems}/>
                <ConfirmButton items={[
                  {label: 'Save', onClick: this.onSave},
                  {label: 'Publish', onClick: this.onPublish, confirm: {warning: 'Are you shure?', actionText: 'Of course, shure!'}},
                ]} label={'Done'}/>
              </ContentHeader>
              <div>
                <HGroup>
                  <DashboardChart title={'Onboards'} subtitle={'percent'} data={{xAxisType: 'datetime', xData: randomizeArray(sparklineData), yLabels}} filterItems={filterMenuItems}/>
                  <DonutChart totalLabel={'Interactions'} items={chartItems} menuItems={changeMenuItems} filterItems={filterMenuItems} title={'Sign Up'} subtitle={'Button'}/>
                </HGroup>
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
              <div>
                <Button onClick={this.onPopupOpen}>Open popup</Button>
              </div>
              <TabbedPanel
                tabItems={[{label: 'One Credentials', value: 1, link: 'one'}, {label: 'Two Schemas', value: 2, link: 'two'}, {label: 'Tree', value: 3, link: 'tree'}]}
                selectedTabValue={this.state.tab}
                onTabChange={this.onTabChange}
              >
                Content
              </TabbedPanel>
              <TabbedPanel
                tabItems={[{label: 'One Credentials', value: 1, link: 'one'}, {label: 'Two Schemas', value: 2, link: 'two'}, {label: 'Tree', value: 3, link: 'tree'}]}
                selectedTabValue={this.state.tab}
                disableLinks={true}
                onTabChange={this.onTabChange}
              >
                <ContentHeader>
                  <AlignedHGroup>
                    <BulletItem label={'First (31)'} bulletColor={'#FF0000'}/>
                    <BulletItem label={'Second (12)'} bulletColor={'#00FF00'} style={{paddingLeft: 16}}/>
                    <BulletItem label={'Third (7)'} style={{paddingLeft: 16}}/>
                  </AlignedHGroup>
                  <div style={{paddingRight: 16}}>
                    <ButtonWithMenu
                      style={{textTransform: 'none'}}
                      items={roomItems}
                      menuMaxHeight={200}
                      variant={'text'}
                      endIcon={<ExpandIcon/>}
                    >
                      Select room
                    </ButtonWithMenu>
                  </div>
                  <SearchBar onTextFilterChange={this.onTextFilterChange}/>
                </ContentHeader>
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
                textFilter={this.state.textFilter}
                onTextFilterChange={this.onTextFilterChange}
              />
              <SearchBar onTextFilterChange={this.onTextFilterChange} textFilter={this.state.textFilter}/>
              <DataTable
                columns={[
                  idLink((item: any)=> item.identity, 'name'),
                  idColumn('name'),
                  {
                    fieldId: 'status',
                    enumValues: ['Active', 'Archived', 'Stopped', 'Paused'],
                    header: {title: 'Status', sortable: true},
                    renderer: (props: RendererProps) => (<SelectRenderer {...props}/>)
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
