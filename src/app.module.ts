import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TaskModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule {}