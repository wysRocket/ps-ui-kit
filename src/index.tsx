import {Diff} from "./domain/Diff";
import SideBar from "./components/SideBar";
import {HSplit, VSplit} from "./components/Split";
import {Service as IService} from "./domain/Service";
import {Identity as IIdentity} from "./domain/Identity";
import {ServiceAction as IServiceAction, ServiceActionProps} from "./domain/ServiceAction";
import * as Auth from "./domain/User";
import AppHeader from "./components/AppHeader";
import ContentHeader from "./components/ContentHeader";
import Panel from "./components/Panel";
import DashboardFilter from "./components/DashboardFilter";
import {DateFilterButton} from "./components/DateFilterButton";
import DashboardChart, {DashboardChartData as IDashboardChartData} from "./components/DashboardChart";
import DonutChart, {DonutChartItem as IDonutChartItem} from "./components/DonutChart";
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
import DropSelector, {PrettyDropSelector} from "./components/DropSelector";
import {ConfirmButton, ConfirmButtonItem as IConfirmButtonItem} from "./components/ConfirmButton";
import {ButtonWithMenu, ButtonMenuItem as IButtonMenuItem} from "./components/ButtonWithMenu";
import {IconButtonWithMenu} from "./components/IconButtonWithMenu";
import AlignedHGroup from "./components/AlignedHGroup";
import BulletItem from "./components/BulletItem";
import {LabeledItem as ILabeledItem} from "./domain/Item";
import {DateRange as IDateRange} from "@matharumanpreet00/react-daterange-picker";
import {DraggableList} from "./components/DraggableList";
import * as Styles from "./components/DefaultStyles";
import TableWithPagination from "./components/table/TableWithPagination";
import ButtonBasedDropSelector from "./components/ButtonBasedDropSelector";
import NumberedContainer from "./components/NumberedContainer";
import NameValueContainer from "./components/NameValueContainer";
import ActionInstanceContainer from "./components/ActionInstanceContainer";
import * as Buttons from "./components/Buttons";
import * as SchemaDomain from "./domain/SchemaDomain";
import * as AttributeComponent from "./components/AttributeComponent";
import ExpandedAttributesList from "./components/ExpandedAttributesList";
import * as Forms from "./components/Forms";

export type Service = IService;
export type Identity<T = string | number> = IIdentity<T>;
export type ServiceAction = IServiceAction;
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
export type ConfirmButtonItem = IConfirmButtonItem;
export type ButtonMenuItem = IButtonMenuItem;
export type DonutChartItem = IDonutChartItem;
export type DropSelectorItem = ILabeledItem;
export type LabeledItem = ILabeledItem;
export type DateRange = IDateRange;
export type DashboardChartData = IDashboardChartData;

const Constants = {
  H_PADDING: 32
};

export {
  ContentHeader,
  DraggableList,
  DashboardFilter,
  DateFilterButton,
  DashboardChart,
  DonutChart,
  TableLegend,
  Panel,
  SearchBar,
  Paginator,
  IconPreview,
  TabbedPanel,
  BulletItem,
  Filter,
  PopUp,
  Tree,
  HGroup,
  AlignedHGroup,
  Context,
  StubbedListApi,
  ListItemApi,
  Converter,
  createReducer,
  ActionCreator,
  ActionWrapper,
  DropSelector,
  ButtonBasedDropSelector,
  PrettyDropSelector,
  ConfirmButton,
  IconButtonWithMenu,
  ButtonWithMenu,
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
  Auth,
  AppHeader,
  ServiceActionProps,
  Diff,
  SideBar,
  VSplit,
  HSplit,
  Constants,
  Styles,
  TableWithPagination,
  NumberedContainer,
  NameValueContainer,
  ActionInstanceContainer,
  Buttons,
  SchemaDomain,
  AttributeComponent,
  ExpandedAttributesList,
  Forms,
};
