import {FC} from "react";

import Pagination from "@material-ui/lab/Pagination";
import {FormControl, NativeSelect, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export interface PaginationIProps {
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  ranges: number[];
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  onChangeSizePage: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "8px 32px"
  }
}));

const CustomPagination: FC<PaginationIProps> = ({
  itemsPerPage,
  itemsTotal,
  currentPage,
  ranges,
  onPageChange,
  onChangeSizePage
}) => {
  const classes = useStyles();

  const numPages = Math.ceil(itemsTotal / itemsPerPage);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(itemsTotal, currentPage * itemsPerPage);

  const strRange = (...props: any[]) => {
    let str = "Showing {0}-{1} of {2}";
    if (props && props.length) {
      props.forEach((p, i) => {
        str = str.replace(`{${i}}`, p);
      });
    }
    return str;
  };

  return (
    <Box display="flex" alignItems="center">
      <Box sx={{paddingLeft: "15px"}}>{strRange(from, to, itemsTotal)}</Box>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={itemsPerPage}
          onChange={(e) => onChangeSizePage(e.target.value)}
          name="pages"
        >
          {ranges &&
            ranges.map((row, i) => (
              <option value={row} key={i}>
                {row}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
      <Box sx={{flexGrow: 1}} />
      <Pagination count={numPages} onChange={onPageChange} page={currentPage} />
    </Box>
  );
};

export default CustomPagination;
