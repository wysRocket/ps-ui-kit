import {Tabs as BaseTabs, TabsProps as BaseTabsProps} from "@mui/material";
import {FC} from "react";
import useStyles from "./styles";

export type TabsProps = Omit<BaseTabsProps, "onChange">;

export interface Props extends TabsProps {
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

export const Tabs: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <BaseTabs
      {...props}
      TabIndicatorProps={{className: classes.indicator}}
      className={classes.tabs}
    />
  );
};
