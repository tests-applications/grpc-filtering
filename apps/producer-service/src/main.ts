import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProducerServiceModule } from './producer-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProducerServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user.v1',
      protoPath: join(
        __dirname,
        '../../../proto/user.proto'
      ),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();

  console.log('Producer gRPC service listening on 50051');
}
bootstrap();
