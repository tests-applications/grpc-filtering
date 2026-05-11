import { Module } from '@nestjs/common';
import { ProducerServiceController } from './producer-service.controller';
import { ProducerServiceService } from './producer-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../proto/user.proto'),
          url: process.env.OPTION_URL,
        },
      },
    ]),
  ],
  controllers: [ProducerServiceController],
  providers: [ProducerServiceService],
})
export class ProducerServiceModule {}
