import {FC} from "react";

import Pagination from "@mui/material/Pagination";
import {FormControl, NativeSelect, Box} from "@mui/material";
import {v4 as uuidv4} from "uuid";

import {styles} from "./styles";
import useClasses from "utils/useClasses";

export interface IPagination {
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  ranges: number[];
}

interface CustomPaginationProps extends IPagination {
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  itemsPerPage,
  itemsTotal,
  currentPage,
  ranges,
  setPagination
}) => {
  const classes = useClasses(styles);

  const numPages = Math.ceil(itemsTotal / itemsPerPage);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(itemsTotal, currentPage * itemsPerPage);

  const strRange = (...args: any[]) => {
    let str = "Showing {0}-{1} of {2}";

    if (args.length) {
      args.forEach((arg, index) => {
        str = str.replace(`{${index}}`, arg);
      });
    }
    return str;
  };

  const onPageChange = (currentPage: number) => {
    setPagination((state) => ({...state, currentPage}));
  };

  const onSizePageChange = (value: string) => {
    setPagination((state) => ({...state, itemsPerPage: +value, currentPage: 1}));
  };

  return (
    <Box display="flex" alignItems="center">
      <Box sx={{paddingLeft: "15px"}}>{strRange(from, to, itemsTotal)}</Box>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={itemsPerPage}
          onChange={(e) => onSizePageChange(e.target.value)}
          name="pages"
        >
          {ranges.map((row) => (
            <option value={row} key={uuidv4()}>
              {row}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <Box flexGrow={1} />
      <Pagination count={numPages} onChange={(_e, page) => onPageChange(page)} page={currentPage} />
    </Box>
  );
};

export default CustomPagination;
