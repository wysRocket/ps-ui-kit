import {Tabs as BaseTabs, TabsProps as BaseTabsProps} from "@mui/material";
import {FC} from "react";
import useClasses from "utils/useClasses";

import {styles} from "./styles";

export type TabsProps = Omit<BaseTabsProps, "onChange">;

export interface Props extends TabsProps {
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

export const Tabs: FC<Props> = (props) => {
  const classes = useClasses(styles);

  return (
    <BaseTabs
      {...props}
      TabIndicatorProps={{className: classes.indicator}}
      className={classes.tabs}
    />
  );
};
