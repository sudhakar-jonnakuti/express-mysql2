import { Response } from "express";
import status from "http-status";

import { ISuccessResponse } from "./success.interface";

const SuccessOk = (response: Response, payload?: unknown): Response<ISuccessResponse> => {
  const statusOk: ISuccessResponse = {
    statusCode: Number(status["OK"]),
    statusName: String(status[`${status.OK}_NAME`]),
    ...(payload ? { payload } : {})
  };

  return response.status(statusOk.statusCode).json(statusOk);
};

const SuccessCreated = (response: Response, payload?: unknown): Response<ISuccessResponse> => {
  const statusCreated: ISuccessResponse = {
    statusCode: Number(status["CREATED"]),
    statusName: String(status[`${status.OK}_CREATED`]),
    ...(payload ? { payload } : {})
  };

  return response.status(statusCreated.statusCode).json(statusCreated);
};

const SuccessAccepted = (response: Response, payload?: unknown): Response<ISuccessResponse> => {
  const statusAccepted: ISuccessResponse = {
    statusCode: Number(status["ACCEPTED"]),
    statusName: String(status[`${status.OK}_ACCEPTED`]),
    ...(payload ? { payload } : {})
  };

  return response.status(statusAccepted.statusCode).json(statusAccepted);
};

const SuccessNonAuthInfo = (response: Response, payload?: unknown): Response<ISuccessResponse> => {
  const statusNonAuthInfo: ISuccessResponse = {
    statusCode: Number(status["NON_AUTHORITATIVE_INFORMATION"]),
    statusName: String(status[`${status.OK}_NON_AUTHORITATIVE_INFORMATION`]),
    ...(payload ? { payload } : {})
  };

  return response.status(statusNonAuthInfo.statusCode).json(statusNonAuthInfo);
};

const SuccessNoContent = (response: Response, payload?: unknown): Response<ISuccessResponse> => {
  const statusNonAuthInfo: ISuccessResponse = {
    statusCode: Number(status["NO_CONTENT"]),
    statusName: String(status[`${status.OK}_NO_CONTENT`]),
    ...(payload ? { payload } : {})
  };

  return response.status(statusNonAuthInfo.statusCode).json(statusNonAuthInfo);
};

export { SuccessAccepted, SuccessCreated, SuccessNoContent, SuccessNonAuthInfo, SuccessOk };
