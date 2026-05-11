import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConsumerServiceModule } from './consumer-service.module';

async function bootstrap() {
  const PORT = process.env.PORT || 30110;
  const app = await NestFactory.create(ConsumerServiceModule);

  const config = new DocumentBuilder()
    .setTitle('GRPC-Filtering')
    .setDescription('Documentation')
    .setVersion('1.0')
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT);

  console.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
  console.log(`Listen port ${PORT}`);
}
bootstrap();
