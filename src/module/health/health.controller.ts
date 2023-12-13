import { SuccessOk } from "@shared/response/success/success.response";
import { Request, Response } from "express";

class HealthCheckController {
  getHealth = (request: Request, response: Response): void => {
    SuccessOk(response, { status: "healthy" });
  };
}

export { HealthCheckController };
