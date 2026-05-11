import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProducerServiceModule } from './producer-service.module';

async function bootstrap() {
  const URL = process.env.PRODUCER_URL;

  const app = await NestFactory.createMicroservice(ProducerServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user.v1',
      protoPath: join(
        __dirname,
        '../../../proto/user.proto'
      ),
      url: URL,
    },
  });

  await app.listen();

  console.log(`Producer gRPC service listening on ${URL}`);
}
bootstrap();
