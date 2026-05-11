import { NestFactory } from '@nestjs/core';
import { ConsumerServiceModule } from './consumer-service.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ConsumerServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../../proto/user.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
}
bootstrap();
