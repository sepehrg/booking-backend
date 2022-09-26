import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'booking',
  password: 'booking',
  database: 'booking',
  synchronize: true,
  logging: true,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});
