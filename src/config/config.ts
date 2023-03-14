function dbCon() {
  const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_DEV_DB_NAME,
    DB_STG_DB_NAME,
    DB_PROD_DB_NAME,
    NODE_ENV,
  } = process.env;

  const databaseCredentials = {
    development: {
      username: DB_USER,
      password: DB_PASS,
      database: DB_DEV_DB_NAME,
      host: DB_HOST,
      dialect: 'mysql',
    },
    staging: {
      username: DB_USER,
      password: DB_PASS,
      database: DB_STG_DB_NAME,
      host: DB_HOST,
      dialect: 'mysql',
    },
    production: {
      username: DB_USER,
      password: DB_PASS,
      database: DB_PROD_DB_NAME,
      host: DB_HOST,
      dialect: 'mysql',
    },
  };

  return databaseCredentials[NODE_ENV];
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    ...dbCon(),
  },
});
