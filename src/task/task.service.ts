import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: any): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async update(id: any, task: Task): Promise<Task> {
    const existingTask = await this.taskRepository.findOne(id);
    if (existingTask) {
      Object.assign(existingTask, task);
      return this.taskRepository.save(existingTask);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}