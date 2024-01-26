import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TasksController],
  
  providers: [TasksService]
})
export class TasksModule {}


// tu-modulo.module.ts
// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { MorganMiddleware } from './morgan.middleware';
// import { TuControlador } from './tu-controlador.controller';

// @Module({
//   controllers: [TuControlador],
// })
// export class TuModulo implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(MorganMiddleware).forRoutes('*');
//   }
// }