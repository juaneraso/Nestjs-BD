import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from 'sequelize.config';
import { Task } from 'src/tasks/task.entity';

const models = [Task];

@Module({
    imports: [
      SequelizeModule.forRoot(sequelizeConfig),
      SequelizeModule.forFeature(models),
    ],
  })
export class DatabaseModule {}
