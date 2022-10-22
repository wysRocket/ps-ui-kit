import {FC} from "react";
import {Tab as BaseTab, TabProps as BaseTabProps} from "@mui/material";

import {styles} from "./styles";
import useClasses from "utils/useClasses";

interface TabProps extends BaseTabProps {
  variant: string;
  label: string;
}

const TabItem: FC<TabProps> = ({variant, ...props}) => {
  const classes = useClasses({variant, ...styles});

  return <BaseTab className={classes.root} {...props} />;
};

export default TabItem;
