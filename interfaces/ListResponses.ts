export interface ListResponses<T> {
  data: {
    count: number;
    results: T[];
  };
}
