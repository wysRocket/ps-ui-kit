import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UserRole} from "../../domain/User";
import {AppHeader as AHeader} from ".";

export default {
  title: "Components/AppHeader",
  component: AHeader
} as ComponentMeta<typeof AHeader>;

const Template: ComponentStory<typeof AHeader> = (args) => <AHeader {...args} />;

export const AppHeader = Template.bind({});
AppHeader.args = {
  user: {
    login: "Test Login",
    email: "testEmail@email.com",
    roles: [UserRole.ZAKA_ADMIN],
    User1: "2"
  },
  menuItems: [
    {
      onClick: () => console.log("Charts click"),
      label: "Charts"
      // icon?: any;
    },
    {
      onClick: () => console.log("Logout click"),
      label: "Logout"
      // icon?: any;
    }
  ],
  onFilterChange: (filter: string) => console.log(filter),
  filterPlaceholder: "Filter placeholder",
  onSwitchSidebarMode: () => console.log("onSwitchSidebarMode function")
};
