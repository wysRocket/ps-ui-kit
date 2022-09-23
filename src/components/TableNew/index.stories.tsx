import {ComponentMeta, ComponentStory} from "@storybook/react";
import {TableData as TData} from ".";

export default {
  title: "Components/Table",
  component: TData
} as ComponentMeta<typeof TData>;

const Template: ComponentStory<typeof TData> = (args) => <TData {...args} />;

export const TableData = Template.bind({});
TableData.args = {
  headerColumns: [
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
  ],
  data: [
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
  ],
  sortHandler: (columnName: string, direction: string) => {
    console.log("Sort working!", columnName, direction);
  }
};
