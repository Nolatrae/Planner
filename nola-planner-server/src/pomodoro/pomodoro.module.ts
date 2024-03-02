import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskController } from './pomodoro.controller'
import { TaskService } from './pomodoro.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
