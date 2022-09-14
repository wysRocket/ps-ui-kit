import {FC} from "react";

import {Tab as BaseTab, TabProps as BaseTabProps} from "@material-ui/core";

import useStyles from "./styles";

interface TabProps extends BaseTabProps {
  variant: string;
  label: string;
}

const TabItem: FC<TabProps> = ({variant, ...props}) => {
  const classes = useStyles({variant});

  return <BaseTab className={classes.root} {...props} />;
};

export default TabItem;
