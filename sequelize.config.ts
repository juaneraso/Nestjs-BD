// sequelize.config.ts
import { SequelizeModuleOptions } from '@nestjs/sequelize';

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1085321805',
  database: 'prueba3',
  autoLoadModels: true,
  synchronize: true,
  //synchronize: true, // configurar en false en producción para evitar sincronización automática
};


export default sequelizeConfig;
