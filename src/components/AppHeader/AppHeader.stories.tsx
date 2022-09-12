import {Story} from "@storybook/react";
import {AppHeader as AHeader, IProps} from "./AppHeader";


export default {
  title: "Components/AppHeader",
  component: AHeader
};

const Template: Story<IProps> = (args) => <AHeader {...args} />;


export const AppHeader: Story<IProps> = Template.bind({});
AppHeader.args = {
  user: {login: 'Test Login', email: 'testEmail@email.com', roles: ['ZAKA_ADMIN'], 
  User1: '2',},
  menuItems: [
    {
      onClick: () => console.log( "Charts click"),
      label: 'Charts',
      // icon?: any;
    },
    {
      onClick: () => console.log( "Logout click"),
      label: 'Logout',
      // icon?: any;
    }
  ],
  onFilterChange: (filter: string) => console.log(filter),
  filterPlaceholder: 'Filter placeholder',
  onSwitchSidebarMode: () => console.log('onSwitchSidebarMode function'),
};

