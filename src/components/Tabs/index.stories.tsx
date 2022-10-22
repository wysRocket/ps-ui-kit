import {useState, ChangeEvent} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Tabs} from ".";
import {Tab} from "../TabItem";
import tabsData from "./tabsData";

export default {
  title: "Components/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (props) => {
  const [value, setValue] = useState(1);

  const handleChange = (event: ChangeEvent<{}>, value: number) => setValue(value);

  return (
    <Tabs onChange={handleChange} value={value}>
      {tabsData &&
        tabsData.map(({title, path}, index) => (
          <Tab variant="default" label={title} value={path} key={`${path}-${index}`} />
        ))}
    </Tabs>
  );
};

export const TabsOne = Template.bind({});
