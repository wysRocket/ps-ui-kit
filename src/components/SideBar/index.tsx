import {FC} from "react";

import {Service} from "../../domain/Service";

import {useStyles} from "./styles";

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
  const classes = useStyles();
  return (
    <div
      className={`${classes.sideBarWrapper} ${minimized ? classes.sideBarWrapperMinimized : ""}`}
    >
      <SideBarHeader userName={service.identity} isMinimized={minimized} logo={service.logo} />
      <div>
        {items.map((item: SideBarItemProps, index: number) => (
          <SideBarItem
            key={index}
            title={item.label}
            to={item.link}
            icon={item.icon}
            isMinimized={minimized}
          />
        ))}
        {/* <SideBarFooter /> */}
      </div>
    </div>
  );
};
