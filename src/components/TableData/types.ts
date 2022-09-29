export interface HeaderColumn {
  name: string;
  label: string;
  sortable?: boolean;
}

export interface Data {
  [key: string]: any;
}

export enum SortOrder {
  DESC = "desc",
  ASC = "asc"
}
