import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT:number = 5000;
  app.enableCors();
  await app.listen(PORT,()=>{
    Logger.log(`server runs ${PORT}`)
  });
}
bootstrap();
