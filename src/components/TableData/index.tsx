import {FC, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box
} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import CustomPagination, {IPagination} from "../CustomPagination";
import {Data, HeaderColumn, SortOrder} from "./types";
import {useStyles} from "./styles";

export interface TableProps {
  data: Data[];
  headerColumns: HeaderColumn[];
  pagination: IPagination;
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
  sortHandler: (columnName: string, direction: SortOrder) => void;
}

const TableData: FC<TableProps> = ({
  data,
  headerColumns,
  pagination,
  sortHandler,
  setPagination
}) => {
  const classes = useStyles();
  const [sort, setSort] = useState({
    by: "",
    order: SortOrder.DESC
  });

  const onSort = (column: HeaderColumn) => {
    setSort((state) => ({
      by: column.name,
      order: state.order === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC
    }));
    sortHandler(column.name, sort.order);
  };

  return (
    <Box className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            {headerColumns.map((column) => (
              <TableCell key={uuidv4()}>
                {column.sortable ? (
                  <TableSortLabel
                    IconComponent={ArrowDropDown}
                    active={sort.by === column.name}
                    direction={sort.order}
                    onClick={() => onSort(column)}
                    classes={{
                      icon:
                        sort.by === column.name ? classes.activeSortIcon : classes.inactiveSortIcon
                    }}
                  >
                    <Box fontWeight={sort.by === column.name ? "bold" : ""}>{column.label}</Box>
                  </TableSortLabel>
                ) : (
                  <Box>{column.label}</Box>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const values = Object.values(item);
            return (
              <TableRow key={uuidv4()} selected={false}>
                {values.map((row) => (
                  <TableCell key={uuidv4()}>{row}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <CustomPagination {...pagination} setPagination={setPagination} />
    </Box>
  );
};

export default TableData;
