export type Meta = {
  totalCount: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
};

export type EdenApiResponse<T> = {
  data: {
    data: T;
    meta: Meta;
  };
  error: null | unknown;
  response: unknown;
  status: number;
  headers: unknown;
};

export type GetApiResponse<T> = {
  data: T[];
  meta?: Meta;
};

export type GetApiQuery = {
  page: number;
  pageSize: number;
  query: string;
};
