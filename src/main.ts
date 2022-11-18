import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function serverStart() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4444);
}
serverStart();
