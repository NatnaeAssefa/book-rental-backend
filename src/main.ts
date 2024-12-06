import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Book Rental API')
    .setDescription('API for managing book rentals')
    .setVersion('1.0')
    .addBearerAuth() // Enable JWT authentication if required
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Visit /api for the documentation

  await app.listen(3000);
}
bootstrap();
