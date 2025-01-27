// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// Remova o bootstrap() se estiver usando apenas Lambda
if (process.env.NODE_ENV !== 'serverless') {
  bootstrap();
}
