import * as React from 'react';
import {DeleteActionRenderer, EditActionRenderer, LinkRenderer, RendererProps, StaticRenderer} from "../Renderers";
import {SortDirection} from "../../domain/Sort";

export interface HeaderProps {
  title?: string;
  icon?: any;
  sortable?: boolean;
  sortDirection?: SortDirection;
}

export interface ColumnInfo {
  header: HeaderProps;
  fieldId: string;
  enumValues?: any[];
  renderer: (props: RendererProps) => React.ReactElement<RendererProps>;
  linkSource?: (item: any) => string;
  valueToView?: (value: any) => any;
  isEdit?: boolean;
  isRemove?: boolean;
}

export const textColumn = (title: string, fieldId: string, sortDirection?: SortDirection): ColumnInfo => {
  return {
    header: {title, sortable: true, sortDirection},
    fieldId,
    valueToView: (value: any) => value ? value.toString() : '',
    renderer: (props: RendererProps) => (<StaticRenderer value={props.value}/>)
  };
};

export const textLink = (linkSource: (item: any) => string, title: string, fieldId: string, sortDirection?: SortDirection): ColumnInfo => {
  return {
    header: {title, sortable: true, sortDirection},
    fieldId,
    linkSource,
    valueToView: (value: any) => value ? value.toString() : '',
    renderer: (props: RendererProps) => (<LinkRenderer value={props.value} link={props.link}/>)
  };
};

export const idColumn = (title: string, sortDirection?: SortDirection): ColumnInfo => {
  return textColumn(title, 'identity', sortDirection);
};

export const idLink = (linkSource: (item: any) => string, title: string, sortDirection?: SortDirection): ColumnInfo => {
  return textLink(linkSource, title, 'identity', sortDirection);
};

export const editColumn = (): ColumnInfo => {
  return {
    header: {},
    fieldId: 'identity',
    isEdit: true,
    renderer: (props: RendererProps) => (<EditActionRenderer value={props.value} onClick={props.onClick}/>),
  };
};

export const deleteColumn = (): ColumnInfo => {
  return {
    header: {},
    fieldId: 'identity',
    isRemove: true,
    renderer: (props: RendererProps) => (<DeleteActionRenderer value={props.value} onClick={props.onClick}/>),
  };
};
