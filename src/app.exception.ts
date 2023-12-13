import { Application, NextFunction, Request, Response } from "express";
import { HandlerException } from "src/shared/exception/handler.exception";

const appException = (app: Application) => {
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    new HandlerException(error, request, response, next);
  });
};

export { appException };
