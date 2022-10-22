import {Component, FC} from "react";
import {Diff} from "../../domain/Diff";
import {ColumnInfo} from "./column";
import {Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import {invertDirection, Sort, SortDirection} from "../../domain/Sort";
import {HTML5Backend} from "react-dnd-html5-backend";
import DraggableRow from "./DraggableRow";
import * as Styles from "../DefaultStyles";
import {CSSProperties} from "react";

import {DndHacked} from "../DndHacked";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  activeSortIcon: {opacity: 1},
  inactiveSortIcon: {opacity: 0.2}
});

const SortableHeader: FC<{
  column: ColumnInfo;
  sort?: Sort;
  onSort?: (newSort: Sort) => void;
}> = ({column, sort, onSort}) => {
  const classes = useStyles();

  if (!column.header) {
    return <div />;
  }
  if (column.header.sortable) {
    const sortHandler = () => {
      if (onSort !== undefined) {
        let newSort: Sort = {field: column.fieldId, direction: SortDirection.ASC};
        if (sort && sort.field === column.fieldId) {
          newSort = {field: sort.field, direction: invertDirection(sort.direction)};
        }
        onSort(newSort);
      }
    };
    const active = sort && sort.field === column.fieldId;
    const hs: CSSProperties = {};
    if (active) {
      hs.fontWeight = "bold";
    }
    return (
      <TableSortLabel
        IconComponent={ArrowDropDown}
        active={active}
        direction={sort ? sort.direction : "asc"}
        onClick={sortHandler}
        classes={{icon: active ? classes.activeSortIcon : classes.inactiveSortIcon}}
        hideSortIcon={column.header.hideSortIcon}
      >
        <div style={hs}>{column.header.title}</div>
      </TableSortLabel>
    );
  }

  return <div>{column.header.title || ""}</div>;
};

export interface IProps<T> {
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

export default class DataTable<T> extends Component<IProps<T>> {
  render() {
    const {columns, data, sort, idField, onSwitchItems} = this.props;
    const id = idField || "identity";
    return (
      <DndHacked backend={HTML5Backend}>
        <Table style={this.props.style}>
          <TableHead>
            <TableRow
              style={{
                height: Styles.Padding.XXL,
                backgroundColor: Styles.Table.Color.HEADER_BACKGROUND
              }}
            >
              {columns.map((column, index) => {
                const style: any = {padding: "4px 15px 4px"};
                /*if (column.width) {
                style.width = column.width;
              }*/
                return (
                  <TableCell
                    key={index}
                    style={style}
                    sortDirection={sort && sort.field === column.fieldId ? sort.direction : false}
                    align={column.align}
                  >
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
                    style={{height: Styles.Padding.XXL}}
                    selected={false}
                    move={onSwitchItems}
                    type={"tableItem"}
                    index={index}
                    id={itemId}
                  >
                    {columns.map((column, i) => (
                      <TableCell
                        key={i}
                        style={{paddingTop: Styles.Padding.XS, paddingBottom: Styles.Padding.XS}}
                        align={column.align}
                      >
                        {this.renderCell(item, column)}
                      </TableCell>
                    ))}
                  </DraggableRow>
                );
              }
              return (
                <TableRow key={index} style={{height: Styles.Padding.XXL}} selected={false}>
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      style={{paddingTop: Styles.Padding.XS, paddingBottom: Styles.Padding.XS}}
                      align={column.align}
                    >
                      {this.renderCell(item, column)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DndHacked>
    );
  }

  renderHeaderCell(column: ColumnInfo) {
    return <SortableHeader column={column} sort={this.props.sort} onSort={this.props.onSort} />;
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
  };

  createChangeHandler = (item: T, column: ColumnInfo) => (newValue: any) => {
    const onChange = this.props.onChange;
    if (onChange !== undefined) {
      onChange(item, new Diff(column.fieldId, (item as any)[column.fieldId], newValue));
    }
  };

  renderCell(item: T, column: ColumnInfo) {
    return column.renderer({
      item,
      value: (item as any)[column.fieldId],
      onClick: this.createClickHandler(item, column),
      enumValues: column.enumValues,
      onChange: this.createChangeHandler(item, column),
      link: column.linkSource !== undefined ? column.linkSource(item) : undefined
    });
  }
}
