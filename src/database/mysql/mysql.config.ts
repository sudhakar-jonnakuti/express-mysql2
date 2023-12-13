import { createPool } from "mysql2/promise";

const MySqlPool = async () => {
  const pool = await createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: Number(process.env.MYSQL_PORT),
    connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT)
  });
  return pool;
};

export { MySqlPool };
