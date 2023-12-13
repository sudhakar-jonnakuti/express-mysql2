import { InternalServeError } from "@shared/error/server.error";
import { Response } from "express";

import { IErrorPayload, IErrorResponse } from "./failure.interface";

const sanitizeErrorResponse = (errorResponse: IErrorResponse) => {
  const { payload } = errorResponse;
  const { errorRawMessage } = payload || {};

  if (
    errorRawMessage &&
    typeof errorRawMessage === "object" &&
    errorRawMessage instanceof InternalServeError
  ) {
    errorResponse.payload = { ...errorRawMessage };
  }
};

const failureResponse = (error: IErrorPayload, response: Response): Response<IErrorResponse> => {
  const { errorCode, errorName, errorMessage, errorRawMessage } = error;

  const payload = {
    errorCode,
    errorName,
    errorMessage,
    ...(errorRawMessage ? { errorRawMessage } : {})
  };

  const errorResponse: IErrorResponse = {
    statusCode: errorCode,
    statusName: errorName,
    payload
  };

  sanitizeErrorResponse(errorResponse);

  return response.status(errorCode).json(errorResponse);
};

export { failureResponse };
