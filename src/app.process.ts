import process from "node:process";

import { AppTerminator } from "./app.terminator";

process.on("EACCES", () => {
  console.log(`Process ${process.pid} received EACCES`);
  new AppTerminator().handleExit(1);
});

process.on("EADDRINUSE", () => {
  console.log(`Process ${process.pid} received EADDRINUSE`);
  new AppTerminator().handleExit(1);
});

process.on("SIGTERM", () => {
  console.log(`Process ${process.pid} received SIGTERM`);
  new AppTerminator().handleExit(0);
});

process.on("SIGINT", () => {
  console.log(`Process ${process.pid} received SIGINT`);
  new AppTerminator().handleExit(0);
});
