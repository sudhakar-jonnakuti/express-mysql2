import status from "http-status";

import { CustomError } from "./custom/custom.error";

export class InternalServeError extends CustomError {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status["INTERNAL_SERVER_ERROR"]),
      errorName: String(status[`${status.INTERNAL_SERVER_ERROR}_NAME`]),
      errorMessage: String(status[`${status.INTERNAL_SERVER_ERROR}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    });
  }
}
