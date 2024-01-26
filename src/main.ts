
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
// import sequelizeConfig from 'sequelize.config';
// import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';



async function bootstrap() {
   // Configurar el módulo de la base de datos
   const databaseModule = await NestFactory.create(DatabaseModule);
   await databaseModule.init();
   

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use(SequelizeModule.forRoot(sequelizeConfig));
  app.use(morgan('dev'));

  await app.listen(3000);
}


bootstrap();
