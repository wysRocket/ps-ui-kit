import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BrowserRouter as Router} from "react-router-dom";

import SideBarItem from ".";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ActionsIcon from "@material-ui/icons/CheckCircle";
import ClientsIcon from "@material-ui/icons/People";
import SchemasIcon from "@material-ui/icons/Transform";

export default {
  title: "Components/SideBarItem",
  component: SideBarItem
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => {
  return (
    <Router>
      <div style={{width: "200px"}}>
        <SideBarItem {...args} />
      </div>
    </Router>
  );
};

export const SideBarItemDashboard = Template.bind({});
export const SideBarItemClients = Template.bind({});
export const SideBarItemSchemas = Template.bind({});
export const SideBarItemInterActions = Template.bind({});
SideBarItemDashboard.args = {
  title: "Dashboard",
  icon: <DashboardIcon />,
  to: "/link-one",
  isMinimized: false
};
SideBarItemClients.args = {
  title: "Clients",
  icon: <ClientsIcon />,
  to: "/link-two",
  isMinimized: false
};
SideBarItemSchemas.args = {
  title: "Schemas",
  icon: <SchemasIcon />,
  to: "/link-three",
  isMinimized: false
};
SideBarItemInterActions.args = {
  title: "Schemas",
  icon: <ActionsIcon />,
  to: "/link-four",
  isMinimized: true
};
