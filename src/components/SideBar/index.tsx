import {FC} from "react";

import {Service} from "../../domain/Service";
import {Box} from "@material-ui/core";

import {useStyles} from "./styles";

import {SideBarItem, SideBarItemProps} from "../SideBarItem";
import {SideBarHeader} from "../SideBarHeader/index";
import {SideBarFooter} from "../SideBarFooter/SideBarFooter";

export interface IProps {
  items: SideBarItemProps[];
  minimized?: boolean;
  service: Service;
  serviceIdentity: string;
  serviceLogo?: string;
  logo?: string;
}

export const SideBar: FC<IProps> = ({
  items,
  serviceIdentity,
  serviceLogo,
  logo,
  minimized = false
}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.sideBarWrapper} ${minimized ? classes.sideBarWrapperMinimized : ""}`}
    >
      <SideBarHeader userName={serviceIdentity} isMinimized={minimized} logo={serviceLogo} />
      <Box p={1}>
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            to={item.to}
            icon={item.icon}
            isMinimized={minimized}
          />
        ))}
      </Box>
      {!minimized && (
        <Box mt="auto">
          <SideBarFooter logo={logo} />
        </Box>
      )}
    </div>
  );
};
