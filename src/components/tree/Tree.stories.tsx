import {Story} from "@storybook/react";
import {Tree as TreeStory, IProps} from "./Tree";

export default {
  title: "Components/DateFilterButton",
  component: TreeStory
};

const Template: Story<IProps> = (args) => <TreeStory {...args} />;

type TValue = string | number;

export const Tree: Story<IProps> = Template.bind({});
Tree.args = {
  elements: [
    {
      content: {label: "1", value: "1"},
      children: [
        {
          content: {label: "1-1", value: "1-1"},
          children: [
            {content: {label: "1-1-1", value: "1-1-1"}},
            {content: {label: "1-1-2", value: "1-1-2"}},
          ]
      },
        {
          content: {label: "1-2", value: "1-2"},
        children: [
          {content: {label: "1-2-1", value: "1-2-1"}},
          {content: {label: "1-2-2", value: "1-2-2"}},
        ]
      },
      ]
    },
    {
      content: {label: "2", value: "2"},
      children: [
        {
          content: {label: "2-1", value: "2-1"},
          children: [
            {content: {label: "2-1-1", value: "2-1-1"}},
            {content: {label: "2-1-2", value: "2-1-2"}},
          ]
      },
        {
          content: {label: "2-2", value: "2-2"},
        children: [
          {content: {label: "2-2-1", value: "2-2-1"}},
          {content: {label: "2-2-2", value: "2-2-2"}},
        ]
      },
      ]
    },
    {
      content: {label: "3", value: "3"},
    },
  ],
  onSelect: (terminalIds: TValue[]) => 
  console.log("is selected", terminalIds),
  expandSelected: true,
};

