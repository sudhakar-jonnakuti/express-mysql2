import status from "http-status";

import { CustomError } from "./custom/custom.error";

export class NotFound extends CustomError {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status["NOT_FOUND"]),
      errorName: String(status[`${status.NOT_FOUND}_NAME`]),
      errorMessage: String(status[`${status.NOT_FOUND}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    });
  }
}

export class BadRequest extends CustomError {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status["BAD_REQUEST"]),
      errorName: String(status[`${status.BAD_REQUEST}_NAME`]),
      errorMessage: String(status[`${status.BAD_REQUEST}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    });
  }
}
