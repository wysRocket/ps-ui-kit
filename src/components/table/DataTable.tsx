import {CSSProperties, default as React} from "react";
import {Diff} from "../../domain/Diff";
import {ColumnInfo} from "./column";
import {Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import {invertDirection, Sort, SortDirection} from "../../domain/Sort";
import DraggableItem from "../DraggableItem";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DraggableRow from "./DraggableRow";

interface IProps<T> {
  style?: CSSProperties;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onChange?: (item: T, ...diffs: Diff[]) => void;
  onSort?: (newSort: Sort) => void;
  columns: ColumnInfo[];
  data: T[];
  idField?: string;
  onSwitchItems?: (fromIndex: number, toIndex: number) => void;
  sort?: Sort;
}

export default class DataTable<T> extends React.Component<IProps<T>> {
  render() {
    const {columns, data, sort, idField, onSwitchItems} = this.props;
    const id = idField || 'identity';
    return (
      <DndProvider backend={HTML5Backend}>
      <Table style={this.props.style}>
        <TableHead>
          <TableRow style={{height: 'auto', backgroundColor: '#F0F0F0'}}>
            {columns.map((column, index) => {
              const style: any = {padding: '4px 15px 4px'};
              /*if (column.width) {
                style.width = column.width;
              }*/
              return (
                <TableCell key={index} style={style} sortDirection={sort && sort.field === column.fieldId ? sort.direction : false}>
                  {this.renderHeaderCell(column)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            const itemId = (item as any)[id];
            if (onSwitchItems !== undefined) {
              return (
                  <DraggableRow
                    key={itemId}
                    style={{height: 'auto'}}
                    selected={false}
                    move={onSwitchItems}
                    type={'tableItem'}
                    index={index}
                    id={itemId}
                  >
                    {columns.map((column, i) => (
                      <TableCell key={i}>
                        {this.renderCell(item, column)}
                      </TableCell>
                    ))}
                  </DraggableRow>
                );
            }
            return (
              <TableRow
                key={index}
                style={{height: 'auto'}}
                selected={false}
              >
                {columns.map((column, i) => (
                  <TableCell key={i}>
                    {this.renderCell(item, column)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </DndProvider>
    );
  }

  createSortHandler = (column: ColumnInfo) => () => {
    const {sort, onSort} = this.props;
    if  (onSort !== undefined) {
      let newSort: Sort = {field: column.fieldId, direction: SortDirection.ASC};
      if (sort && sort.field === column.fieldId) {
        newSort = {field: sort.field, direction: invertDirection(sort.direction)};
      }
      onSort(newSort);
    }
  }

  renderHeaderCell(column: ColumnInfo) {
    if (column.header !== undefined) {
      if (column.header.sortable) {
        const {sort} = this.props;
        return (
          <TableSortLabel
            IconComponent={ArrowDropDown}
            active={sort && sort.field === column.fieldId}
            direction={sort ? sort.direction : 'asc'}
            onClick={this.createSortHandler(column)}
          >
            {column.header.title}
          </TableSortLabel>
        );
      } else {
        return column.header.title || '';
      }
    }

    return ('');
  }

  createClickHandler = (item: T, column: ColumnInfo) => () => {
    if (column.isEdit) {
      const onEdit = this.props.onEdit;
      if (onEdit !== undefined) {
        onEdit(item);
      }
    } else if (column.isRemove) {
      const onDelete = this.props.onDelete;
      if (onDelete !== undefined) {
        onDelete(item);
      }
    } else if (column.onClick !== undefined) {
      column.onClick(item);
    }
  }

  createChangeHandler = (item: T, column: ColumnInfo) => (newValue: any) => {
    const onChange = this.props.onChange;
    if (onChange !== undefined) {
      onChange(item, new Diff(column.fieldId, (item as any)[column.fieldId], newValue));
    }
  }

  renderCell(item: T, column: ColumnInfo) {
    return column.renderer({
      item,
      value: (item as any)[column.fieldId],
      onClick: this.createClickHandler(item, column),
      enumValues: column.enumValues,
      onChange: this.createChangeHandler(item, column),
      link: column.linkSource !== undefined ? column.linkSource(item) : undefined,
    });
  }
}
