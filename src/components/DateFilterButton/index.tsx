import {CSSProperties, FC, useEffect, useState} from "react";
import {RangeCalendar} from "@mantine/dates";
import FilterIcon from "@mui/icons-material/FilterList";
import {Button, Dialog, Paper} from "@mui/material";

import {LabeledItem} from "../../domain/Item";
import ContentHeader from "../ContentHeader";
import DropSelector from "../DropSelector";

export interface IProps {
  style?: CSSProperties;
  menuMaxHeight?: number;
  minDate?: Date;
  maxDate?: Date;
  items: LabeledItem[];
  selectedProp?: string;
  selectedRange?: [Date | null, Date | null];
  onRangeChanged?: (property: string, range: [Date | null, Date | null]) => void;
  cancelLabel?: string;
  okLabel?: string;
}

export const DateFilterButton: FC<IProps> = ({
  selectedProp,
  selectedRange,
  items,
  okLabel,
  cancelLabel,
  style,
  onRangeChanged,
  minDate,
  maxDate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [property, setProperty] = useState("startedAt");
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

  useEffect(() => {
    setProperty(selectedProp || items[0] ? items[0].value : undefined);
  }, []);

  const onSubmit = () => {
    if (property && range[0] && range[1]) {
      setIsOpen(false);
      setRange([null, null]);
      onRangeChanged?.(property, range);
    }
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
              <Button disabled={!property || !range[0] || !range[1]} onClick={onSubmit}>
                {okLabel || "Ok"}
              </Button>
              <Button onClick={() => onCancel()}>{cancelLabel || "Cancel"}</Button>
            </ContentHeader>
            <RangeCalendar
              amountOfMonths={2}
              value={range}
              onChange={setRange}
              minDate={minDate}
              maxDate={maxDate || new Date()}
            />
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
