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
import DataTable, {Sort} from "./components/table/DataTable";
import {
  ColumnInfo as IColumnInfo,
  deleteColumn,
  editColumn,
  idColumn,
  SortDirection,
  textColumn
} from "./components/table/column";
import {
  AbstractRenderer, DeleteActionRenderer, EditActionRenderer,
  RendererProps as IRendererProps,
  SelectRenderer,
  StaticRenderer
} from "./components/Renderers";
import {Context} from "./actions/Context";
import {Converter} from "./api/Converter";
import {ListItemApi, StubbedListApi} from "./api/ListItemApi";
import {createReducer} from "./reducers/ReducerFactory";
import {
  ActionCreator,
  ListAction as IListAction,
  ListActionDispatch as TListActionDispatch,
  ListActionTypes as IListActionTypes
} from "./actions/ActionCreator";
import IconPreview from "./components/IconPreview";

export type Service = IService;
export type Identity = IIdentity;
export type ServiceAction = IServiceAction;
export type User = IUser;
export type DataSort = Sort;
export type ColumnInfo = IColumnInfo;
export type RendererProps = IRendererProps;
export type ListActionDispatch<T extends Identity> = TListActionDispatch<T>;
export type ListActionTypes = IListActionTypes;
export type ListAction<T extends Identity> = IListAction<T>;

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
  Context,
  StubbedListApi,
  ListItemApi,
  Converter,
  createReducer,
  ActionCreator,
  AbstractRenderer,
  StaticRenderer,
  SelectRenderer,
  EditActionRenderer,
  DeleteActionRenderer,
  SortDirection,
  textColumn,
  idColumn,
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
};
