import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BrowserRouter as Router} from "react-router-dom";

import {SideBar as SB} from "./index";
import {sideBarData} from "./sideBarData";

export default {
  title: "Components/SideBar",
  component: SB
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => {
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
  service: {
    description: "Test service from the creator of The Dashboard",
    shortDescription:
      "Dolorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus mi",
    did: "2RjEBo9zXkJByXm14xQHtg",
    enabled: true,
    categories: ["one category", "two categories", "three categories"],
    countries: ["UK", "USA"],
    keywords: ["keyword1", "keyword2"],
    endpoint: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2",
    lastTouch: "2022-09-12T12:21:34.251Z",
    name: "hodkov-test",
    identity: "Identity One",
    logo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo"
  },
  minimized: false
};
SideBarMinimized.args = {
  items: sideBarData,
  service: {
    description: "Test service from the creator of The Dashboard",
    shortDescription:
      "Dolorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus mi",
    did: "2RjEBo9zXkJByXm14xQHtg",
    enabled: true,
    categories: ["one category", "two categories", "three categories"],
    countries: ["UK", "USA"],
    keywords: ["keyword1", "keyword2"],
    endpoint: "https://test.zaka.io/service-dashboard-backend//service/JZcdvnYnLtCt1MP82Lxfw2",
    lastTouch: "2022-09-12T12:21:34.251Z",
    name: "hodkov-test",
    identity: "Identity One",
    logo: "https://test.proofspace.id/zaka/partner-services/did/JZcdvnYnLtCt1MP82Lxfw2/logo"
  },
  minimized: true
};
