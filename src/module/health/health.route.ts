import { HealthCheckController } from "@module/health/health.controller";
import { Router } from "express";

class HealthCheckRoute {
  path = "/health";
  router = Router();
  controller: HealthCheckController;

  constructor() {
    this.controller = new HealthCheckController();
    this.router.get(this.path, this.controller.getHealth);
  }
}

export { HealthCheckRoute };
