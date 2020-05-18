import {Diff} from "./domain/Diff";
import SideBar from "./components/SideBar";
import {HSplit, VSplit} from "./components/Split";
import {Service as IService} from "./domain/Service";
import {Identity as IIdentity} from "./domain/Identity";
import {ServiceAction as IServiceAction, ServiceActionProps} from "./domain/ServiceAction";
import {isUserApproved, User as IUser, UserRole} from "./domain/User";
import AppHeader from "./components/AppHeader";
import ContentHeader from "./components/ContentHeader";
import Panel from "./components/Panel";
import DashboardFilter from "./components/DashboardFilter";
import DateFilter from "./components/DateFilter";
import DashboardChart from "./components/DashboardChart";
import DonutChart from "./components/DonutChart";
import Paginator from "./components/Paginator";
import SearchBar from "./components/SearchBar";
import TableLegend from "./components/TableLegend";
import DataTable from "./components/table/DataTable";
import {
  ColumnInfo as IColumnInfo,
  deleteColumn,
  editColumn,
  idColumn, idLink,
  textColumn, textLink
} from "./components/table/column";
import {
  AbstractRenderer, DeleteActionRenderer, EditActionRenderer, LinkRenderer,
  RendererProps as IRendererProps,
  SelectRenderer,
  StaticRenderer
} from "./components/Renderers";
import {Context} from "./actions/Context";
import {Converter} from "./api/Converter";
import {ChangeOptions as IChangeOptions, GetCondition as IGetCondition, ListItemApi, StubbedListApi} from "./api/ListItemApi";
import {createReducer} from "./reducers/ReducerFactory";
import {
  ActionCreator,
  ListAction as IListAction,
  ListActionDispatch as TListActionDispatch,
  ListActionTypes as IListActionTypes
} from "./actions/ActionCreator";
import IconPreview from "./components/IconPreview";
import TabbedPanel, {TabItem as ITabItem} from "./components/TabbedPanel";
import {Sort, SortDirection, DataRange as IDataRange, invertDirection} from "./domain/Sort";
import {Attribute as IAttribute} from "./domain/Attribute";
import {HGroup} from "./components/Group";
import PopUp from "./components/PopUp";
import {Tree, TreeContent as ITreeContent, TreeElement as ITreeElement} from "./components/tree/Tree";
import Filter from "./components/Filter";
import {ActionWrapper} from "./actions/ActionWrapper";
import DropSelector from "./components/DropSelector";

export type Service = IService;
export type Identity = IIdentity;
export type ServiceAction = IServiceAction;
export type User = IUser;
export type DataSort = Sort;
export type DataRange = IDataRange;
export type ColumnInfo = IColumnInfo;
export type RendererProps = IRendererProps;
export type ListActionDispatch<T extends Identity> = TListActionDispatch<T>;
export type ListActionTypes = IListActionTypes;
export type ListAction<T extends Identity> = IListAction<T>;
export type TabItem = ITabItem;
export type GetCondition<T = undefined> = IGetCondition<T>;
export type ChangeOptions<T = undefined> = IChangeOptions<T>;
export type Attribute = IAttribute;
export type TreeElement = ITreeElement;
export type TreeContent = ITreeContent;

const Constants = {
  H_PADDING: 32
};

export {
  ContentHeader,
  DashboardFilter,
  DateFilter,
  DashboardChart,
  DonutChart,
  TableLegend,
  Panel,
  SearchBar,
  Paginator,
  IconPreview,
  TabbedPanel,
  Filter,
  PopUp,
  Tree,
  HGroup,
  Context,
  StubbedListApi,
  ListItemApi,
  Converter,
  createReducer,
  ActionCreator,
  ActionWrapper,
  DropSelector,
  AbstractRenderer,
  StaticRenderer,
  SelectRenderer,
  EditActionRenderer,
  DeleteActionRenderer,
  LinkRenderer,
  SortDirection,
  invertDirection,
  textColumn,
  idColumn,
  idLink,
  textLink,
  editColumn,
  deleteColumn,
  DataTable,
  UserRole,
  AppHeader,
  ServiceActionProps,
  Diff,
  SideBar,
  VSplit,
  HSplit,
  isUserApproved,
  Constants,
};
