import {ComponentMeta, ComponentStory} from "@storybook/react";

import SideBarHeader from ".";

export default {
  title: "Components/SideBarHeader",
  component: SideBarHeader
} as ComponentMeta<typeof SideBarHeader>;

const Template: ComponentStory<typeof SideBarHeader> = (args) => {
  return (
    <div style={{width: "200px"}}>
      <SideBarHeader {...args} />
    </div>
  );
};

export const SideBarHeaderOne = Template.bind({});
export const SideBarHeaderOneMinimized = Template.bind({});
export const SideBarHeaderTwo = Template.bind({});
SideBarHeaderOne.args = {
  userName: "Test1",
  logo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  isMinimized: false
};
SideBarHeaderOneMinimized.args = {
  userName: "Test1",
  logo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  isMinimized: true
};
SideBarHeaderTwo.args = {
  userName: "Test2",
  logo: "	https://test.proofspace.id/zaka/partner-services/did/2RjEBo9zXkJByXm14xQHtg/logo",
  isMinimized: false
};
