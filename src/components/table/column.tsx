import * as React from 'react';
import {DeleteActionRenderer, EditActionRenderer, LinkRenderer, RendererProps, StaticRenderer} from "../Renderers";
import {SortDirection} from "../../domain/Sort";
import {CSSProperties} from "react";

export interface HeaderProps {
  title?: string;
  icon?: any;
  sortable?: boolean;
  sortDirection?: SortDirection;
  hideSortIcon?: boolean;
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
  onClick?: (item: any) => void;
  align?: 'center' | 'inherit' | 'justify' | 'left'  | 'right';
}

export interface TextColumnProps {
  title: string;
  styleSource: (item: any) => CSSProperties | undefined;
}

type TCType = TextColumnProps | string;

export const textColumn = (title: TCType, fieldId: string, sortDirection?: SortDirection): ColumnInfo => {
  return {
    header: {title: (typeof title === 'string') ? title : title.title, sortable: true, sortDirection},
    fieldId,
    valueToView: (value: any) => value ? value.toString() : '',
    renderer: (props: RendererProps) => (
      <StaticRenderer
        style={(typeof title === 'string') ? undefined : title.styleSource(props.item)}
        item={props.item}
        value={props.value}
        valueToView={(value: any) => value ? value.toString() : ''}
      />
    )
  };
};

export const textLink = (linkSource: (item: any) => string, title: TCType, fieldId: string, sortDirection?: SortDirection): ColumnInfo => {
  return {
    header: {title: (typeof title === 'string') ? title : title.title, sortable: true, sortDirection},
    fieldId,
    linkSource,
    valueToView: (value: any) => value ? value.toString() : '',
    renderer: (props: RendererProps) => (
      <LinkRenderer
        style={(typeof title === 'string') ? undefined : title.styleSource(props.item)}
        item={props.item}
        value={props.value}
        link={props.link}
        valueToView={(value: any) => value ? value.toString() : ''}
      />
    )
  };
};

export const idColumn = (title: TCType, sortDirection?: SortDirection): ColumnInfo => {
  return textColumn(title, 'identity', sortDirection);
};

export const idLink = (linkSource: (item: any) => string, title: TCType, sortDirection?: SortDirection): ColumnInfo => {
  return textLink(linkSource, title, 'identity', sortDirection);
};

export const editColumn = (): ColumnInfo => {
  return {
    header: {},
    fieldId: 'identity',
    isEdit: true,
    renderer: (props: RendererProps) => (<EditActionRenderer item={props.item} value={props.value} onClick={props.onClick}/>),
  };
};

export const deleteColumn = (): ColumnInfo => {
  return {
    header: {},
    fieldId: 'identity',
    isRemove: true,
    renderer: (props: RendererProps) => (<DeleteActionRenderer item={props.item} value={props.value} onClick={props.onClick}/>),
  };
};
