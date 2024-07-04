export default interface DataResponse<Data> {
  data: Data;
}

export interface ListResponse<Data> extends DataResponse<Array<Data>> {}

export interface PaginationResponse<Data> extends ListResponse<Data> {
  pagination: Pagination;
}

export interface Pagination {
  index: number;
  pageSize: number;
  resultCount: number;
  totalCount: BigInt;
}
