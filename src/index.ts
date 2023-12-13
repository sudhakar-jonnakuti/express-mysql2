import "express-async-errors";
import "./app.process";

import http from "http";
import { createHttpTerminator } from "http-terminator";
import moduleAlias from "module-alias";

import Server from "./server";

const sourcePath = __dirname;
const moduleAliasPath = {
  "@database": `${sourcePath}/database`,
  "@module": `${sourcePath}/module`,
  "@shared": `${sourcePath}/shared`
};

moduleAlias.addAliases(moduleAliasPath);

export const server = http.createServer(new Server().getServer());
export const httpTerminator = createHttpTerminator({ server });

(async () => new Server().serverListen())();
