import { cleanEnv, num, port, str } from "envalid";

const appEnvValidate = () => {
  cleanEnv(process.env, {
    APP_PORT: port(),
    MYSQL_HOST: str(),
    MYSQL_DATABASE: str(),
    MYSQL_USER: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_PORT: str(),
    MYSQL_CONNECTION_LIMIT: num()
  });
};

export { appEnvValidate };
