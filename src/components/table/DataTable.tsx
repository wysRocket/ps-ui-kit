import {CSSProperties, default as React} from "react";
import {Diff} from "../../domain/Diff";
import {ColumnInfo} from "./column";
import {Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import {invertDirection, Sort, SortDirection} from "../../domain/Sort";

interface IProps<T> {
  style?: CSSProperties;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onChange?: (item: T, ...diffs: Diff[]) => void;
  onSort?: (newSort: Sort) => void;
  columns: ColumnInfo[];
  data: T[];
  sort?: Sort;
}

export default class DataTable<T> extends React.Component<IProps<T>> {
  render() {
    const {columns, data, sort} = this.props;
    return (
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
          {data.map((item, index) => (
            <TableRow
              key={index}
              style={{height: 'auto'}}
              selected={false}
            >
              {columns.map((column, j) => (
                <TableCell key={j}>
                  {this.renderCell(item, column)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
      value: (item as any)[column.fieldId],
      onClick: this.createClickHandler(item, column),
      enumValues: column.enumValues,
      onChange: this.createChangeHandler(item, column),
      link: column.linkSource !== undefined ? column.linkSource(item) : undefined,
    });
  }
}
