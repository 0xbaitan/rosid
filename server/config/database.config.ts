const databaseConfig = {
  port: parseInt(process.env.MONGODB_PORT || '27017'),
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  password: process.env.MONGO_INITDB_ROOT_PASSWORD,
  database: process.env.MONGO_INITDB_DATABASE,
  host: process.env.MONGODB_HOST,
};
export const CONN_STRING = (({ user, password, host, port, database }) => {
  return `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=admin`;
})(databaseConfig);

export default databaseConfig;
