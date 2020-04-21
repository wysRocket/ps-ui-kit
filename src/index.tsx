import {Diff} from "./domain/Diff";
import SideBar from "./components/SideBar";
import {HSplit, VSplit} from "./components/Split";
import {Service as IService} from "./domain/Service";
import {Identity as IIdentity} from "./domain/Identity";
import {ServiceAction as IServiceAction, ServiceActionProps} from "./domain/ServiceAction";
import {isUserApproved, User as IUser, UserRole} from "./domain/User";
import AppHeader from "./components/AppHeader";

export type Service = IService;
export type Identity = IIdentity;
export type ServiceAction = IServiceAction;
export type User = IUser;
export {
  UserRole,
  AppHeader,
  ServiceActionProps,
  Diff,
  SideBar,
  VSplit,
  HSplit,
  isUserApproved,
};
