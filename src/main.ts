import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get<ConfigService>(ConfigService);

  const port: number = config.get<number>('PORT', 3001);
  await app.listen(port);
}
bootstrap();
