import { HealthCheckRoute } from "@module/health/health.route";
import { PostRoute } from "@module/post/post.route";
import { BadRequest, NotFound } from "@shared/error/client.error";
import { Application, Request, Response } from "express";

const appModuleRoute = (app: Application) => {
  const moduleRoute = () => [new HealthCheckRoute(), new PostRoute()];

  moduleRoute().forEach((appRoute) => {
    app.use("/api", appRoute.router);
  });
};

const appDefaultRoute = (app: Application) => {
  app.use("*", (request: Request, response: Response) => {
    throw new BadRequest();
  });
};

export { appDefaultRoute, appModuleRoute };
