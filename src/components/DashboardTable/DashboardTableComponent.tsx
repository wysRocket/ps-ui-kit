import {useState, memo} from "react";

import {makeStyles} from "@material-ui/core";

import {TableData} from "../TableNew";
import {PaginationIProps} from "../CustomPagination/index";

const useStyles = makeStyles({
  paper: {
    padding: 15
  },
  table: {
    padding: 13
  }
});

const DashboardTableComponent = memo(({...props}) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const columns = [
    {
      name: "did",
      label: "DID",
      sortable: true
    },
    {
      name: "credentialIssueDate",
      label: "Credentials Issue Date",
      sortable: true
    },
    {
      name: "solarSystem",
      label: "Solar System",
      sortable: false
    },
    {
      name: "date",
      label: "Date",
      sortable: true
    },
    {
      name: "interaction",
      label: "Interaction",
      sortable: false
    },
    {
      name: "response",
      label: "Response",
      sortable: true
    },
    {
      name: "status",
      label: "Status",
      sortable: true
    }
  ];

  const data = [
    {
      did: "111111111111111111111111",
      credentialIssueDate: "63246fd5357ddc9f75470726",
      solarSystem: "Mars",
      date: "",
      interaction: "New Action",
      response: "failed",
      status: "Pending"
    },
    {
      did: "2222222222222222222222",
      credentialIssueDate: "63246fd53xcvxvdc9f75470726",
      solarSystem: "Venus",
      date: "",
      interaction: "New Action",
      response: "completed",
      status: "Failed"
    },
    {
      did: "33333333333333333333",
      credentialIssueDate: "63246fd5357adsasdasd470726",
      solarSystem: "",
      date: "",
      interaction: "New Action",
      response: "completed",
      status: "Failed"
    },
    {
      did: "44444444444444444444444444444444",
      credentialIssueDate: "63246fd5357adsasdasd470726",
      solarSystem: "",
      date: "",
      interaction: "New Action",
      response: "completed",
      status: "Failed"
    }
  ];

  const sortHandler = (columnName: string, direction: string) => {
    console.log("Sort working!", columnName, direction);
  };

  const pagination: PaginationIProps = {
    itemsPerPage: 15,
    itemsTotal: data.length,
    currentPage: 1,
    ranges: [5, 15, 30],
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) =>
      console.log("Change number of page to", page),
    onChangeSizePage: (size: any) => console.log("Change quantity rows on page", size)
  };

  return !isLoading ? (
    <div>
      <div className={classes.paper}>
        <div className={classes.table}>
          <TableData
            data={data}
            headerColumns={columns}
            pagination={pagination}
            sortHandler={sortHandler}
          />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
});

export default DashboardTableComponent;
