import { AppDatabase } from "@database/mysql/mysql.database";
import cors from "cors";
import express from "express";

import { appEnvValidate } from "./app.config";
import { appException } from "./app.exception";
import { appDefaultRoute, appModuleRoute } from "./app.route";

class Server {
  serverPort = Number(process.env.APP_PORT);
  app: express.Application;

  constructor() {
    this.app = express();

    this.initEnvironment();
    this.initMiddlewares();
    this.initRoutes();
    this.initException();
  }

  initEnvironment() {
    appEnvValidate();
  }

  initMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initRoutes() {
    appModuleRoute(this.app);
    appDefaultRoute(this.app);
  }

  initException() {
    appException(this.app);
  }

  getServer() {
    return this.app;
  }

  serverListen() {
    return this.getServer().listen(Number(this.serverPort), async () => {
      new AppDatabase().openConnection();
      console.log(`App port : ${this.serverPort}`);
      console.log(`App environment : ${process.env.ENV_NAME}`);
    });
  }
}

export default Server;
