export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  totalPages: number;
}
