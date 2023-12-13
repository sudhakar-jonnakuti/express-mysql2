import { AppDatabase } from "@database/mysql/mysql.database";

import { httpTerminator, server } from "./index";

class AppTerminator {
  handleExit = async (code: number): Promise<void> => {
    try {
      console.log(`Attempting a graceful shutdown with code ${code}`);
      if (server.listening) {
        new AppDatabase().closeConnection();
        console.log("Terminating HTTP connections");
        await httpTerminator.terminate();
      }

      console.log(`Exiting gracefully with code ${code}`);
      process.exit(code);
    } catch (error) {
      console.log("Error shutting down gracefully");
      console.log(error);
      console.log(`Forcing exit with code ${code}`);
      process.exit(code);
    }
  };
}

export { AppTerminator };
