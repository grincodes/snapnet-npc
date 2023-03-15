import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import {
  ValidationPipe,
  VersioningType,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import helmet from 'helmet';
import * as passport from 'passport';

import * as cookieParser from 'cookie-parser';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as express from 'express';
import * as expressLayouts from 'express-ejs-layouts';
import { join } from 'path';

dotenv.config();

async function bootstrap() {
  // ejs

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join('./src/', 'public'));
  app.setBaseViewsDir(join('./src', 'views'));
  app.setViewEngine('ejs');

  const config = new DocumentBuilder()
    .addBearerAuth({ type: 'http' }, 'access-token')
    .setTitle('Snapnet-Npc')
    .setDescription('snapnet api')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api/v1/', app, document);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: [VERSION_NEUTRAL, '1'],
  });

  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());

  app.use(cookieParser());

  await app.listen(port);
}

bootstrap();
