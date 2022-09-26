import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BrowserRouter as Router} from "react-router-dom";

import SideBar from "./index";
import {sideBarData} from "./sideBarData";

export default {
  title: "Components/SideBar",
  component: SideBar
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => {
  console.log("args", args);
  return (
    <Router>
      <SideBar {...args} />
    </Router>
  );
};

export const Default = Template.bind({});
export const Minimized = Template.bind({});

Default.args = {
  items: sideBarData,
  serviceLogo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  serviceIdentity: "Identity One",
  minimized: false,
  logo: "logo"
};

Minimized.args = {
  items: sideBarData,
  serviceLogo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  serviceIdentity: "Identity One",
  minimized: true,
  logo: "logo"
};
