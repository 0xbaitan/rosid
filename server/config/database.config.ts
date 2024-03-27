const databaseConfig = {
  port: parseInt(process.env.MONGODB_PORT || '27017'),
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  password: process.env.MONGO_INITDB_ROOT_PASSWORD,
  database: process.env.MONGO_INITDB_DATABASE,
  host: process.env.MONGODB_HOST,
};

export const CONN_STRING = 'mongodb://127.0.0.1:27017/rosid';
// export const CONN_STRING = (({ user, password, host, port, database }) => {
//   if (process.env.NODE_ENV === 'development') {
//     return 'mongodb://127.0.0.1:27017/rosid';
//   }
//   return `mongodb://127.0.0.1:27017/rosid`;
// })(databaseConfig);

export default databaseConfig;
