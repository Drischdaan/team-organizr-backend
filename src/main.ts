import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get<ConfigService>(ConfigService);

  app.use(helmet());

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: '1',
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port: number = config.get<number>('PORT', 3001);
  await app.listen(port);
}
bootstrap();
