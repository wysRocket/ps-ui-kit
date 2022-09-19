import {FC} from "react";

import {Service} from "../../domain/Service";

import {useStyles} from "./styles";

import {SideBarItem, SideBarItemProps} from "../SideBarItem";
import {SideBarHeader} from "../SideBarHeader/index";
import {SideBarFooter} from "../SideBarFooter/SideBarFooter";

export interface IProps {
  items: SideBarItemProps[];
  minimized?: boolean;
  service: Service;
  logo?: string;
}

export const SideBar: FC<IProps> = ({items, service, logo, minimized = false}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.sideBarWrapper} ${minimized ? classes.sideBarWrapperMinimized : ""}`}
    >
      <SideBarHeader userName={service.identity} isMinimized={minimized} logo={service.logo} />
      <div>
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            to={item.to}
            icon={item.icon}
            isMinimized={minimized}
          />
        ))}
      </div>
      {!minimized && (
        <div className={classes.sideBarFooter}>
          <SideBarFooter logo={logo} />
        </div>
      )}
    </div>
  );
};
