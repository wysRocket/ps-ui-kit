import {Story} from "@storybook/react";
import {DateRangePickerValue as DateRange} from "@mantine/dates";
import {DateFilterButton as DFButton, IProps} from "./DateFilterButton";

export default {
  title: "Components/DateFilterButton",
  component: DFButton
};

const Template: Story<IProps> = (args) => <DFButton {...args} />;

export const DateFilterButton: Story<IProps> = Template.bind({});
DateFilterButton.args = {
  onRangeChanged: (prop: string, range: DateRange) =>
    console.log("date range changed", prop, range),
  items: [
    {label: "started at", value: "1"},
    {label: "two", value: 2}
  ]
};
