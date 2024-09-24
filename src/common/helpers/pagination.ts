export type PaginationOptions = {
  size?: number;
};

export type Pagination = {
  page: number;
  pageSize: number;
  offset: number;
};

export const defaultPagination = {
  totalCount: 0,
  totalPages: 0,
  pageSize: 0,
  currentPage: 0,
};

export const getPaginationOptions = (
  query: Record<string, string | undefined>,
  options?: PaginationOptions
): Pagination => {
  const { page, pageSize } = query;
  const defaultPage = 1;
  const defaultSize = options?.size ? options.size : 10;
  const currentPage = page ? parseInt(page) : defaultPage;
  const currentLimit = pageSize ? parseInt(pageSize) : defaultSize;
  const offset = (currentPage - 1) * currentLimit;
  return {
    page: currentPage,
    pageSize: currentLimit,
    offset,
  };
};
export const getPaginationMetadata = (
  pagination: Pagination,
  totalCount: number
) => {
  const totalPages = Math.ceil(totalCount / pagination.pageSize);
  return {
    totalCount,
    totalPages,
    pageSize: pagination.pageSize,
    currentPage: pagination.page,
  };
};
