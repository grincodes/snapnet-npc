import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/authentication/auth.module';
import config from './config/config';
import { validate } from './config/custom-validation/env.validation';
import { UserModule } from './modules/user/user.module';
import { StatesModule } from './modules/states/states.module';
import { CitizenModule } from './modules/citizen/citizen.module';
import { WardModule } from './modules/ward/ward.module';
import { LgaModule } from './modules/lga/lga.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validate,
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ...config.get('database'),
        port: 3306,
        autoLoadModels: true,
        synchronize: true,
        query: { raw: true },
      }),
    }),
    AuthModule,
    UserModule,
    StatesModule,
    CitizenModule,
    WardModule,
    LgaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
