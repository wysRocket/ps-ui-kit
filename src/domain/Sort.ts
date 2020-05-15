export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface Sort {
  field: string;
  direction: SortDirection;
}

export interface DataRange {
  limit?: number;
  offset?: number;
}

export const invertDirection = (direction?: SortDirection) => {
  if (direction === SortDirection.DESC) {
    return SortDirection.ASC;
  }
  return SortDirection.DESC;
};
