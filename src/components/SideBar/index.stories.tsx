import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BrowserRouter as Router} from "react-router-dom";

import {SideBar as SB} from "./index";
import {sideBarData} from "./sideBarData";
import * as logo from "./PSLogoSmall.png"; // should be deleted

export default {
  title: "Components/SideBar",
  component: SB
} as ComponentMeta<typeof SB>;

const Template: ComponentStory<typeof SB> = (args) => {
  console.log("args", args);
  return (
    <Router>
      <SB {...args} />
    </Router>
  );
};

export const SideBar = Template.bind({});
export const SideBarMinimized = Template.bind({});

SideBar.args = {
  items: sideBarData,
  serviceLogo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  serviceIdentity: "Identity One",
  minimized: false,
  logo: logo
};
SideBarMinimized.args = {
  items: sideBarData,
  serviceLogo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo",
  serviceIdentity: "Identity One",
  minimized: true,
  logo: logo
};
