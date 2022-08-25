import {CSSProperties, FC, useState} from "react";
import {DateRangePickerValue, RangeCalendar} from "@mantine/dates";
import FilterIcon from "@material-ui/icons/FilterList";
import {Button, Dialog, Paper} from "@material-ui/core";

import {LabeledItem} from "../domain/Item";
import ContentHeader from "./ContentHeader";
import DropSelector from "./DropSelector";

export interface IProps {
  style?: CSSProperties;
  menuMaxHeight?: number;
  minDate?: Date;
  maxDate?: Date;
  items: LabeledItem[];
  selectedProp?: string;
  selectedRange?: typeof RangeCalendar;
  onRangeChanged?: (property: string, range: DateRangePickerValue) => void;
  cancelLabel?: string;
  okLabel?: string;
}

export const DateFilterButton: FC<IProps> = ({
  selectedProp,
  selectedRange,
  items,
  okLabel,
  cancelLabel,
  style
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [property, setProperty] = useState(selectedProp || items[0] ? items[0].value : undefined);
  const [range, setRange] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  const onSubmit = () => {
    if (property && range) {
      setIsOpen(false);
      setRange([null, null]);
    }
    setProperty(property); // or onRangeChanged(range)???
  };

  const onCancel = () => {
    setIsOpen(false);
    setRange([null, null]);
  };

  return (
    <div>
      <Dialog
        maxWidth={false}
        PaperProps={{style: {borderRadius: 0}}}
        onClose={onCancel}
        open={isOpen}
      >
        <Paper elevation={3}>
          <div>
            <ContentHeader style={{paddingLeft: 32, paddingRight: 32, display: "flex"}}>
              <DropSelector items={items} selected={property} onChange={setProperty} />
              <Button disabled={!property || !range} onClick={onSubmit}>
                {okLabel || "Ok"}
              </Button>
              <Button>{cancelLabel || "Cancel"}</Button>
            </ContentHeader>
            <RangeCalendar amountOfMonths={2} value={range} onChange={setRange} />
          </div>
        </Paper>
      </Dialog>
      <Button
        disabled={!items.length}
        variant={"outlined"}
        style={style || {width: 32, height: 32, minWidth: 32}}
        onClick={() => setIsOpen(true)}
        >
        <FilterIcon style={{color: "#999999"}} />
      </Button>
    </div>
  );
};
