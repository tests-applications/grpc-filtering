import { NestFactory } from '@nestjs/core';
import { ProducerServiceModule } from './producer-service.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(ProducerServiceModule);

  const config = new DocumentBuilder()
    .setTitle('GRPC-Filtering')
    .setDescription('Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT);

  console.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
  console.log(`Listen port ${PORT}`);
}
bootstrap();
