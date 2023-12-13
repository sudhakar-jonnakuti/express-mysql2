import { InternalServeError } from "@shared/error/server.error";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2";

import { MySqlPool } from "./mysql.config";
import { APP_QUERY } from "./mysql.query";

type ResultSet = [RowDataPacket[] | RowDataPacket[][] | ResultSetHeader, FieldPacket[]];

class AppDatabase {
  openConnection = async () => {
    try {
      const pool = await MySqlPool();
      const [threadConnected]: ResultSet = await pool.query(APP_QUERY.THREADS_CONNECTED);
      const thread: string[] = (threadConnected as any[]).map((item) => item.Value);
      console.log(`MySql Open connections : ${thread[0]}`);
    } catch (error: unknown) {
      throw new InternalServeError(error);
    }
  };

  closeConnection = async () => {
    try {
      const pool = (await MySqlPool()).end;
      console.log(`MySql close connections : ${pool.length}`);
    } catch (error: unknown) {
      throw new InternalServeError(error);
    }
  };
}

export { AppDatabase };
