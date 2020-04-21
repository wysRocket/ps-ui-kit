export enum UserRole {
  ZAKA_ADMIN = 'ZAKA_ADMIN',
  SERVICE_OWNER = 'SERVICE_OWNER',
  SERVICE_EMPLOYEE = 'SERVICE_EMPLOYEE',
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
  role: UserRole;
  [key: string]: any;
}

export const isUserApproved = (user: User) => {
  const role = user.role || UserRole.NOT_APPROVED;
  return role !== UserRole.NOT_APPROVED;
};
