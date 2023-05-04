import { DataSource } from 'typeorm';
import {  } from 'dotenv';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];



//return {
//    type: 'mysql',
//    host: envConfig.parsed.DB_HOST,
//    port: +envConfig.parsed.DB_PORT,
//    username: envConfig.parsed.DB_USERNAME,
//    password: envConfig.parsed.DB_PASSWORD,
//    database: envConfig.parsed.DB_NAME,
//    entities: [Task],
//    synchronize: true,
//  };