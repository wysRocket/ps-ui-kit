import {CSSProperties, default as React} from "react";
import {Diff} from "../../domain/Diff";
import {Sort} from "../../domain/Sort";
import {ColumnInfo} from "./column";
import DataTable from "./DataTable";
import Paginator from "../Paginator";
import * as Styles from "../DefaultStyles";

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
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  ranges?: number[];
  onPageChange: (value: number) => void;
  onPageSizeChange: (value: number) => void;
}

export default class TableWithPagination<T> extends React.Component<IProps<T>> {
  render() {
    return (
      <div style={this.props.style || {border: `1px solid ${Styles.Table.Color.BORDER}`, borderRadius: 4}}>
        <DataTable
          columns={this.props.columns}
          data={this.props.data}
          onChange={this.props.onChange}
          onSwitchItems={this.props.onSwitchItems}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
          onSort={this.props.onSort}
          sort={this.props.sort}
          idField={this.props.idField}
        />
        <div style={{
          paddingLeft: Styles.Padding.S,
          paddingRight: Styles.Padding.S,
          paddingTop: Styles.Padding.XS,
          paddingBottom: Styles.Padding.XS
        }}>
          <Paginator
            itemsPerPage={this.props.itemsPerPage}
            itemsTotal={this.props.itemsTotal}
            currentPage={this.props.currentPage}
            ranges={this.props.ranges}
            onPageChange={this.props.onPageChange}
            onPageSizeChange={this.props.onPageSizeChange}
          />
        </div>
      </div>
    );
  }
}
