import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from 'src/database/database.module';
import { taskProviders } from './task.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders,TaskService],
  controllers: [TaskController],
  exports: [TaskService],
})
export class TaskModule {}