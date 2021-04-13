export enum UserRole {
  ZAKA_ADMIN = 'ZAKA_ADMIN',
  SERVICE_ADMIN = 'SERVICE_ADMIN',
  SERVICE_SUPPORT = 'SERVICE_SUPPORT',
  SERVICE_CONFIG = 'SERVICE_CONFIG',
  SERVICE_CONFIG_READONLY = 'SERVICE_CONFIG_READONLY',
  SERVICE_SUPPORT_READONLY = 'SERVICE_SUPPORT_READONLY',
  CALLCENTER = 'CALLCENTER',
  NOT_APPROVED = 'NOT_APPROVED',
}

export enum UserProps {
  LOGIN = 'login',
  EMAIL = 'email',
  ROLE = 'role',
}

export const USER_PROPS_LIST = [UserProps.LOGIN, UserProps.EMAIL, UserProps.ROLE];

export interface User {
  login: string;
  email?: string;
  roles: UserRole[];
  [key: string]: any;
}

export const isUserApproved = (user: User) => {
  if (!user.roles.length) {
    return false;
  }
  const role = user.roles[0] || UserRole.NOT_APPROVED;
  return role !== UserRole.NOT_APPROVED;
};
