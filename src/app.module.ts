import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DotenvConfigOutput, config } from 'dotenv';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRootAsync({
      useFactory: (): any => {
        const envConfig: DotenvConfigOutput = config();

        return {
          type: 'mysql',
          host: envConfig.parsed.DB_HOST,
          port: +envConfig.parsed.DB_PORT,
          username: envConfig.parsed.DB_USERNAME,
          password: envConfig.parsed.DB_PASSWORD,
          database: envConfig.parsed.DB_NAME,
          entities: [Task],
          synchronize: true,
        };
      },
    }),
  ],
})
export class AppModule {}