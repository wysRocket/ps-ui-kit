import {FC} from "react";
import {Tab as BaseTab, TabProps as BaseTabProps} from "@mui/material";

export interface TabProps extends BaseTabProps {
  variant: string;
  label: string;
}

export const Tab: FC<TabProps> = (props) => (
  <BaseTab
    sx={{
      color: "black",
      fontFamily: "Helvetica",
      fontSize: "0.95rem",
      minWidth: 10,
      padding: 0,
      minHeight: 32,
      marginRight: 32,
      textTransform: "none"
    }}
    {...props}
  />
);
