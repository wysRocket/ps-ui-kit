import {ComponentMeta, ComponentStory} from "@storybook/react";

import {SideBarHeader as SBHeader} from ".";

export default {
  title: "Components/SideBarHeader",
  component: SBHeader
} as ComponentMeta<typeof SBHeader>;

const Template: ComponentStory<typeof SBHeader> = (args) => {
  return (
    <div style={{width: "200px"}}>
      <SBHeader {...args} />
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
