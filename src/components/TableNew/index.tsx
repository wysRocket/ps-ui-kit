// This is common reuseble table components of our project

import {FC, memo, useState} from "react";

import {Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {getMuiTheme, useStyles} from "./tableStyles";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import CustomPagination from "../CustomPagination";

import {PaginationIProps} from "../CustomPagination";

export interface HeaderColumnsIProps {
  name: string;
  label: string;
  sortable?: boolean;
}

const defaultPagination: PaginationIProps = {
  itemsPerPage: 15,
  itemsTotal: 1,
  currentPage: 1,
  ranges: [5, 15, 30],
  onPageChange: (event, page) => console.log("Change number of page to", page),
  onChangeSizePage: (size) => console.log("Change quantity rows on page", size)
};

export interface TableProps {
  data: Array<object | number[] | string[]>;
  headerColumns: any;
  pagination?: PaginationIProps;
  sortHandler: (columnName: string, direction: string) => void;
}

type SortIOrder = "desc" | "asc" | undefined;

export const TableData: FC<TableProps> = memo(
  ({data, headerColumns, pagination = defaultPagination, sortHandler}) => {
    const [sortOrder = "desc", setSortOrder] = useState<SortIOrder>("desc");
    const [sortBy, setSortBy] = useState("");
    const classes = useStyles();

    const onSort = (column: any) => {
      setSortOrder(sortOrder !== "desc" ? "desc" : "asc");
      setSortBy(column.name);
      sortHandler(column.name, sortOrder);
    };

    return (
      <MuiThemeProvider theme={getMuiTheme()}>
        <div className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {headerColumns.map((column: any, index: number) => {
                  return (
                    <TableCell key={index}>
                      {column.sortable ? (
                        <TableSortLabel
                          IconComponent={ArrowDropDown}
                          active={sortBy === column.name}
                          direction={sortOrder}
                          onClick={() => onSort(column)}
                          classes={{
                            icon:
                              sortBy === column.name
                                ? classes.activeSortIcon
                                : classes.inactiveSortIcon
                          }}
                        >
                          <div style={{fontWeight: sortBy === column.name ? "bold" : ""}}>
                            {column.label || ""}
                          </div>
                        </TableSortLabel>
                      ) : (
                        <div>{column.label || ""}</div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => {
                const values = Object.values(item);
                return (
                  <TableRow key={index} selected={false}>
                    {values.map((row, i) => (
                      <TableCell key={i}>{row}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <CustomPagination {...pagination} />
        </div>
      </MuiThemeProvider>
    );
  }
);

export default TableData;
