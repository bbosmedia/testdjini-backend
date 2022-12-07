import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function serverStart() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = process.env.PORT || 4444
  await app.listen(PORT);
}

serverStart();
