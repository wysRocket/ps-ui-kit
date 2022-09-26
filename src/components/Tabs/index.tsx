import {Tabs as BaseTabs, TabsProps as BaseTabsProps} from "@material-ui/core";

import useStyles from "./styles";

export type TabsProps = Omit<BaseTabsProps, "onChange">;

export interface Props extends TabsProps {
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <BaseTabs
      {...props}
      TabIndicatorProps={{className: classes.indicator}}
      className={classes.tabs}
    />
  );
};
