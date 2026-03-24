import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita a comunicação com o Frontend
  app.enableCors(); 
  
  // A API rodará em http://localhost:3000
  await app.listen(3000);
}
bootstrap();
