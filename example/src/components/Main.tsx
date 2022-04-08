import React, {CSSProperties} from "react";
import {Service, SideBar, HSplit, VSplit, AppHeader, Auth, Panel, ContentHeader, DashboardFilter,
  DateFilterButton, DashboardChart, DonutChart, Paginator, SearchBar, TableLegend, DataTable,
  deleteColumn, editColumn, idColumn, RendererProps, SelectRenderer, SortDirection, TabbedPanel, PopUp,
  Tree, idLink, ConfirmButton, DonutChartItem, ButtonMenuItem, HGroup, AlignedHGroup, BulletItem, ButtonWithMenu,
  DateRange, DraggableList, Identity, Styles, TableWithPagination, ButtonBasedDropSelector, NumberedContainer,
  NameValueContainer, ActionInstanceContainer, Buttons, SchemaDomain, AttributeComponent, ExpandedAttributesList, Forms,
  PrettyDropSelector, ItemGroup
} from "frontend-common";
import {Button, FormGroup, RadioGroup} from "@material-ui/core";
import EyeIcon from "@material-ui/icons/Visibility";
import HideIcon from "@material-ui/icons/VisibilityOff";
import MoveIcon from "@material-ui/icons/OpenWith";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import {cloneDeep} from "lodash";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BrowserRouter as Router} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';

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

interface MyId extends Identity<string> {
  name: string;
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
  {label: 'Knowledge base', value: 'kbase', link: 'http://google.com', isExternalLink: true},
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
    actions,
    instanceVisible: true,
    flow: 's',
    slow: '',
    plow: '',
    checked: false
  };

  componentWillMount() {
    Styles.initTheme(Styles.BlueTheme);
  }

  onInstanceVisibleChange = () => {
    this.setState({instanceVisible: !this.state.instanceVisible});
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

  onSwitchActions = (fromIndex: number, toIndex: number) => {
    const prevOrder = this.state.actions || [];
    const actions = cloneDeep(prevOrder);
    actions[fromIndex] = prevOrder[toIndex];
    actions[toIndex] = prevOrder[fromIndex];
    this.setState({actions});

  };

  onFlowChange = (evt: any) => {
    console.log(evt.target.value, evt);
    this.setState({flow: evt.target.value});
  };

  flowChange = (slow: string) => {
    console.log('flow', slow);
    this.setState({slow});
  };

  plowChange = (plow?: string) => {
    console.log('plow', plow);
    this.setState({plow});
  };

  onCheckedChange = () => this.setState({checked: !this.state.checked});

  render() {
    const height = document.documentElement.clientHeight - 65;
    console.log('f', this.state.flow);
    return (
      <VSplit size={Styles.SideBar.Size.WIDTH} style={{height: '100%'}}>
        <SideBar
            logoBarStyle={{height: 64}}
            service={service}
            onSelect={onSideSelect}
            items={items}
            selected={'Dashboard'}
            minimized={false}
            zakaLabel={'MyLife+'}
        />
        <HSplit size={64}>
          <AppHeader user={{login: 'admin', roles: [Auth.UserRole.SERVICE_ADMIN]}} menuItems={appMenuItems} notifications={3}>
            Hello google
          </AppHeader>
          <Panel style={{height}}>
            <PopUp title={'Parameters and instances'} opened={this.state.popupOpened} onClose={this.onPopupClose} disableBackdropClick={true}>
              <div>
                <Buttons.IconButtonWithPopper
                  popperStyle={{zIndex: 5000}}
                  popperContent={(<div>Hello, this is info message from popUp</div>)}
                >
                  <InfoIcon/>
                </Buttons.IconButtonWithPopper>
              </div>
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
              <div>
                <ItemGroup.ButtonWithCheckboxItems
                  label={'+ Predicate'}
                  onFilterChange={(t) => console.log(t)}
                  items={[
                    {label: 'First Name', value: 'name', extLabel: 'used in predicate'},
                    {label: 'Second Name', value: 'Second Name'},
                    {label: 'Birth Date', value: 'bd'},
                    {label: 'Age', value: 'Age'},
                    {label: 'Issue Date', value: 'issue date'},
                  ]}
                  selected={['name']}
                  onSelectionChange={(c) => console.log('selection', c)}
                  popperStyle={{zIndex: 5000}}
                />
              </div>
            </PopUp>
            <div>
              <ItemGroup.ItemsGroup
                onFilterChange={(t) => console.log(t)}
                items={[
                  {label: 'First Name', value: 'name', extLabel: 'used in predicate'},
                  {label: 'Second Name', value: 'Second Name'},
                  {label: 'Birth Date', value: 'bd'},
                  {label: 'Age', value: 'Age'},
                  {label: 'Issue Date', value: 'issue date'},
                ]}
                itemRenderer={(item, index) => (<div key={index}>{item.label}</div>)}
                mainHeaderElement={(<ContentHeader style={{height: 32}}><div>130</div><div>Select</div></ContentHeader>)}
              />
            </div>
            <div style={{paddingLeft: Styles.Padding.L, paddingRight: Styles.Padding.L}}>
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
                  <DashboardChart title={'Fails'} subtitle={'percent'} data={{xAxisType: 'datetime', xData: randomizeArray(sparklineData), yLabels}} filterItems={filterMenuItems}/>
                  <DonutChart totalLabel={'Interactions'} items={chartItems} menuItems={changeMenuItems} filterItems={filterMenuItems} title={'Sign Up'} subtitle={'Button'}/>
                </HGroup>
                Hello
              </div>
              <DraggableList
                items={this.state.actions}
                type={'action'}
                move={this.onSwitchActions}
                renderer={(item) => (<div>{item.identity} - {item.status}</div>)}
              />
              <div>
                <Buttons.IconButtonWithPopper
                  popperContent={(<div>Hello, this is info message for... For hz</div>)}
                >
                  <InfoIcon/>
                </Buttons.IconButtonWithPopper>
              </div>
              <div>
                <ButtonBasedDropSelector variant={'text'} items={topItems} onChange={(v) => console.log(v)}/>
              </div>
              <div>
                <Buttons.Gray label={'My Gray Button'}/>
              </div>
              <div>
                <Buttons.Gray disabled label={'My Gray Button'}/>
              </div>
              <div>
                <Buttons.Orange label={'Issue'}/>
              </div>
              <div>
                <Buttons.Orange disabled label={'Issue'}/>
              </div>
              <div>
                <Buttons.Red label={'Reject'}/>
              </div>
              <div>
                <Buttons.Red disabled label={'Reject'}/>
              </div>
              <div>
                <Buttons.Text label={'Text'}/>
              </div>
              <div>
                <Buttons.Text disabled label={'Text'}/>
              </div>
              <div>
                <RadioGroup name="flow" value={this.state.flow} onChange={this.onFlowChange}>
                  <Forms.RadioInGroup value={'s'} label={'Simple'}/>
                  <Forms.RadioInGroup value={'p'} label={'Pin'}/>
                </RadioGroup>
              </div>
              <div>
                <div>
                  <Forms.StandaloneRadioButton
                    name={'plow'}
                    value={'pp'}
                    checked={this.state.plow === 'pp'}
                    onChange={this.plowChange}
                  /> Plow PIN
                </div>
                <div>
                  <Forms.StandaloneRadioButton
                    name={'plow'}
                    value={'ps'}
                    checked={this.state.plow === 'ps'}
                    onChange={this.plowChange}
                    disabled={true}
                  /> Plow Simple
                </div>
              </div>
              <div>
                <Forms.RBGroup name={'SereFlow'} onChange={this.flowChange} value={this.state.slow} items={[
                  {label: 'So simple', value: 'one'}, {label: 'So PIN', value: 'two'}
                ]}/>
              </div>
              <div>
                <Forms.SimpleCheckbox onChange={this.onCheckedChange} checked={this.state.checked}/>
              </div>
              <div>
                <FormGroup>
                  <Forms.CheckBoxInGroup onChange={this.onCheckedChange} checked={this.state.checked}/>
                </FormGroup>
              </div>
              <div>
                <NumberedContainer number={1}>
                  <div>Hello!</div>
                </NumberedContainer>
              </div>
              <div style={{paddingTop: 24}}>
                <NameValueContainer
                  number={1}
                  onChange={(n, v) => console.log('nme value change', n, v)}
                  onRemove={() => console.log('name value remove')}
                  nameLabel={'Nimmen'}
                  valueLabel={'Valuishen'}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.BoxedViewer
                  attribute={{name: 'First Name', value: 'Arturito'}}
                  schemaAttribute={{name: 'First Name', type: SchemaDomain.AttributeType.TEXT, description: 'Your first name'}}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Viewer
                  attribute={{name: 'First Name', value: 'Arturito'}}
                  schemaAttribute={{name: 'First Name', type: SchemaDomain.AttributeType.TEXT, description: 'Your first name'}}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Editor
                  attribute={{name: 'First Name', value: 'Arturito'}}
                  schemaAttribute={{name: 'First Name', type: SchemaDomain.AttributeType.TEXT, description: 'Your first name', valueSources: ['QR']}}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Editor
                  attribute={{name: 'Status', value: 'May be\nor not'}}
                  numRows={3}
                  schemaAttribute={{name: 'Status', type: SchemaDomain.AttributeType.TEXT, multiline: true, description: 'Your status'}}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Editor
                  attribute={{name: 'Age', value: '10'}}
                  schemaAttribute={{name: 'Age', type: SchemaDomain.AttributeType.NUMBER, description: 'Your age'}}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Editor
                  attribute={{name: 'Date of birth', value: '1000000'}}
                  schemaAttribute={{name: 'Date of birth', type: SchemaDomain.AttributeType.DATE, description: 'Your dob'}}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.Editor
                  attribute={{name: 'Sex', value: '0'}}
                  schemaAttribute={{
                    name: 'Sex', type:
                    SchemaDomain.AttributeType.CUSTOM_TYPE,
                    enumValues: [
                      {name: 'F', value: '0', description: 'Female'},
                      {name: 'M', value: '1', description: 'Male'}
                    ],
                    description: 'Your sex'
                  }}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <AttributeComponent.SimpleEditor
                  attribute={{name: 'Sex', value: '0'}}
                  schemaAttribute={{
                    name: 'Sex', type:
                    SchemaDomain.AttributeType.CUSTOM_TYPE,
                    enumValues: [
                      {name: 'F', value: '0', description: 'Female'},
                      {name: 'M', value: '1', description: 'Male'}
                    ],
                    description: 'Your sex'
                  }}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div style={{paddingTop: Styles.Padding.M}}>
                <PrettyDropSelector
                  selected={'0'}
                  items={[
                    {label: 'Female', value: '0'},
                    {label: 'Unknown', value: '-1'},
                    'divider',
                    {label: 'Male', value: '1'}
                  ]}
                  onChange={(a) => console.log(a)}
                />
              </div>
              <div>
                <ItemGroup.ButtonWithCheckboxItems
                  label={'+ Predicate'}
                  onFilterChange={(t) => console.log(t)}
                  items={[
                    {label: 'First Name', value: 'name', extLabel: 'used in predicate'},
                    {label: 'Second Name', value: 'Second Name'},
                    {label: 'Birth Date', value: 'bd'},
                    {label: 'Age', value: 'Age'},
                    {label: 'Issue Date', value: 'issue date'},
                    ]}
                  selected={['name']}
                  onSelectionChange={(c) => console.log('selection', c)}
                />
              </div>
              <div style={{width: 500}}>
                <ItemGroup.CheckboxItemsGroup
                  filterStyle={{width: 450}}
                  filter={'Hello'}
                  items={[
                    {label: 'First Name', value: 'name', extLabel: 'used in predicate'},
                    {label: 'Second Name', value: 'Second Name'},
                    {label: 'Birth Date', value: 'bd'},
                    {label: 'Age', value: 'Age'},
                    {label: 'Issue Date', value: 'issue date'},
                  ]}
                  selected={['name']}
                  onSelectionChange={(c) => console.log('selection', c)}
                />
              </div>
              <div style={{paddingTop: 24}}>
                <ExpandedAttributesList
                  style={{width: 450}}
                  icon={(<MoveIcon/>)}
                  header={'Hunter Elementary School'}
                  attributes={[
                    {
                      attribute: {name: 'First Name', value: 'Arturito'},
                      schemaField: {name: 'First Name', type: SchemaDomain.AttributeType.TEXT, description: 'Your first name'}
                    },
                    {
                      attribute: {name: 'Age', value: '10'},
                      schemaField: {name: 'Age', type: SchemaDomain.AttributeType.NUMBER, description: 'Your age'}
                    },
                    {
                      attribute: {name: 'Date of birth', value: '1000000'},
                      schemaField: {name: 'Date of birth', type: SchemaDomain.AttributeType.DATE, description: 'Your dob'}
                    },
                  ]}
                />
              </div>
              <div style={{paddingTop: 24, paddingLeft: 40}}>
                <ExpandedAttributesList
                  style={{width: 450}}
                  header={'Hunter Elementary School'}
                  attributes={[
                    {
                      attribute: {name: 'First Name', value: 'Arturito!\nYou are bandito!\nGangsterito!'},
                      schemaField: {name: 'First Name', type: SchemaDomain.AttributeType.TEXT, description: 'Your first name'}
                    },
                    {
                      attribute: {name: 'Age', value: '10'},
                      schemaField: {name: 'Age', type: SchemaDomain.AttributeType.NUMBER, description: 'Your age'}
                    },
                    {
                      attribute: {name: 'Date of birth', value: '1000000'},
                      schemaField: {name: 'Date of birth', type: SchemaDomain.AttributeType.DATE, description: 'Your dob'}
                    },
                  ]}
                />
              </div>
              <div style={{paddingTop: 24, paddingLeft: 40}}>
                <ExpandedAttributesList
                  style={{width: 450}}
                  attributeNameStyle={{maxWidth: 200, color: '#8B8B8B'}}
                  attributeValueStyle={{maxWidth: 200}}
                  header={'Med 2.0 strange case'}
                  attributes={[
                    {
                      attribute: {
                        name: 'Some strange attribute with very very very long name or and some question why? Because f#ck you, that because',
                        value: 'let\'s imagine that you can use the same time right now because this video is not available for remote playback of new Hunter service\nArturito!\nYou are bandito!\nGangsterito!'},
                      schemaField: {
                        name: 'Some strange attribute with very very very long name or and some question why? Because f#ck you, that because',
                        type: SchemaDomain.AttributeType.TEXT, description: 'Your first name'}
                    },
                    {
                      attribute: {
                        name: 'Yet anotner question about, hm, about what? May be about your life?',
                        value: 'from your message is not open app after the same time right in front of new posts via email or call me at the moment and I will check it on the other side'},
                      schemaField: {
                        name: 'Yet anotner question about, hm, about what? May be about your life?',
                        type: SchemaDomain.AttributeType.TEXT, description: 'Your age'}
                    },
                    {
                      attribute: {
                        name: 'Somtimes i think, that we are on the wrong way, May be we need more motivation stimulaition and suceed success? Or common and dance? Or somesthing like what?',
                        value: 'some people have recommended for remote playback you mean the same time as the moment and tube ids in the other hand if you have any questions'},
                      schemaField: {
                        name: 'Somtimes i think, that we are on the wrong way, May be we need more motivation stimulaition and suceed success? Or common and dance? Or somesthing like what?',
                        type: SchemaDomain.AttributeType.TEXT, description: 'Your dob'}
                    },
                  ]}
                />
              </div>
              <div style={{paddingTop: 24}}>
                <ActionInstanceContainer
                  number={1}
                  parameters={[
                    {name: 'Lection', value: 'Mathematic Analyse and Something else, i event do not know'},
                    {name: 'Professor', value: 'Professor kislikh schei dr. Moriarty'},
                    {name: 'Auditory', value: 'Big Queens Hall'},
                    {name: 'Start date', value: '2021-03-21'},
                    {name: 'End date', value: '2021-03-22'},
                    ]}
                  visible={this.state.instanceVisible}
                  onEdit={() => console.log('aic edit')}
                  onUpdate={() => console.log('aic update')}
                  onVisibilityChange={this.onInstanceVisibleChange}
                  selected={true}
                />
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
                  <SearchBar onTextFilterChange={this.onTextFilterChange} placeholder={'Serachische'}/>
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
                rightElement={(<PrettyDropSelector selected={'1'} items={[{label: 'one', value: '1'}, {label: 'two', value: '2'}]} onChange={(v) => console.log(v)}/>)}
                textFilter={this.state.textFilter}
                onTextFilterChange={this.onTextFilterChange}
                placeholder={'Iskaitung'}
              />
              <TableWithPagination
                columns={[
                  idLink((item: any)=> item.identity, 'name'),
                  idColumn('name'),
                  {
                    fieldId: 'status',
                    enumValues: ['Active', 'Archived', 'Stopped', 'Paused'],
                    header: {title: 'Status', sortable: true},
                    align: 'center',
                    renderer: (props: RendererProps) => (<SelectRenderer {...props}/>)
                  },
                  editColumn(),
                  deleteColumn(),
                ]}
                data={this.state.actions}
                onSort={onSort}
                onSwitchItems={this.onSwitchActions}
                sort={{direction: SortDirection.ASC, field: 'identity'}}
                currentPage={this.state.currentPage}
                itemsPerPage={this.state.itemsPerPage}
                ranges={[10, 20, 30]}
                itemsTotal={168}
                onPageChange={this.onPageChange}
                onPageSizeChange={this.onPageSizeChange}
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
                data={this.state.actions}
                onSort={onSort}
                onSwitchItems={this.onSwitchActions}
                sort={{direction: SortDirection.ASC, field: 'identity'}}
              />
            </div>
          </Panel>
        </HSplit>
      </VSplit>
    );
  }
}
