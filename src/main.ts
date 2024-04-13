import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    // origin: 'http://localhost:8080', // client app url

    origin: ['http://localhost:8080', 'http://localhost:8081'], // client app urls
  });
  await app.listen(3000);
}
bootstrap();
