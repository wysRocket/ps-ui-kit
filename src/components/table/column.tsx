import * as React from 'react';
import {DeleteActionRenderer, EditActionRenderer, RendererProps, StaticRenderer} from "../Renderers";

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}
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

export const idColumn = (title: string, sortDirection?: SortDirection): ColumnInfo => {
  return textColumn(title, 'identity', sortDirection);
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
