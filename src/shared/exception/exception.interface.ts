export interface IErrorResponse {
  statusCode: number;
  statusName: string;
  payload: IErrorPayload;
}

export interface IErrorPayload {
  errorCode: number;
  errorName: string;
  errorMessage: string;
  errorRawMessage?: unknown;
}
