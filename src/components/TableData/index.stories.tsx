import {useState, useEffect} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import TableData from ".";
import {IPagination} from "components/CustomPagination";
import dataFromServer from "./dataFromServer";
import {SortOrder} from "./types";

export default {
  title: "Components/TableData",
  component: TableData
} as ComponentMeta<typeof TableData>;

const Template: ComponentStory<typeof TableData> = (args) => {
  const [pagination, setPagination] = useState<IPagination>({
    itemsTotal: dataFromServer.length,
    itemsPerPage: 1,
    ranges: [1, 5, 10],
    currentPage: 1
  });

  const [data, setData] = useState(dataFromServer);

  const sortHandler = (columnName: string, direction: SortOrder) => {
    console.log("Sort working!", columnName, direction);
  };

  useEffect(() => {
    const endPoint = pagination.itemsPerPage * pagination.currentPage;
    const startPoint = endPoint - pagination.itemsPerPage;

    setData(dataFromServer.slice(startPoint, endPoint));
  }, [pagination]);

  return (
    <TableData
      {...args}
      data={data}
      pagination={{...pagination}}
      setPagination={setPagination}
      sortHandler={sortHandler}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  headerColumns: [
    {
      name: "did",
      label: "DID",
      sortable: false
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
  ]
};
