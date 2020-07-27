import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const { LISTEN_PORT, LISTEN_IP } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(LISTEN_PORT || '3000', 10), LISTEN_IP || '0.0.0.0');
}

bootstrap();
