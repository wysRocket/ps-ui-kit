import {FC} from "react";

import {Service} from "../../domain/Service";

import {useStyles} from "./styles";

<<<<<<< HEAD
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
=======
import {SideBarItem} from "../SideBarItem";
import {SideBarHeader} from "../SideBarHeader/index";
// import {SideBarFooter} from "../SideBarFooter/SideBarFooter";

export interface SideBarItemProps {
  label: string;
  icon?: React.ReactNode;
  link: string;
}

interface IProps {
  items: SideBarItemProps[];
  minimized?: boolean;
  service: Service;
}

export const SideBar: FC<IProps> = ({items, service, minimized = false, ...props}) => {
>>>>>>> d3cde16 (refactor: added refactored sidebar component)
  const classes = useStyles();
  return (
    <div
      className={`${classes.sideBarWrapper} ${minimized ? classes.sideBarWrapperMinimized : ""}`}
    >
      <SideBarHeader userName={service.identity} isMinimized={minimized} logo={service.logo} />
      <div>
<<<<<<< HEAD
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            to={item.to}
=======
        {items.map((item: SideBarItemProps, index: number) => (
          <SideBarItem
            key={index}
            title={item.label}
            to={item.link}
>>>>>>> d3cde16 (refactor: added refactored sidebar component)
            icon={item.icon}
            isMinimized={minimized}
          />
        ))}
<<<<<<< HEAD
      </div>
      {!minimized && (
        <div className={classes.sideBarFooter}>
          <SideBarFooter logo={logo} />
        </div>
      )}
=======
        {/* <SideBarFooter /> */}
      </div>
>>>>>>> d3cde16 (refactor: added refactored sidebar component)
    </div>
  );
};
