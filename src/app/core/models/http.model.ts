export interface SearchResult<T> {
  incomplete_results: boolean;
  total_count: number;
  items: T[];
}
