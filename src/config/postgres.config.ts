import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const PostgresConfig = () : DataSourceOptions => ({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT, 10),
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  schema: process.env.PG_SCHEMA,
  entities: [join(__dirname, '../', '**/*.entity{.ts,.js}')],
});

const datasource = new DataSource(PostgresConfig());
datasource.initialize();
export default datasource;
