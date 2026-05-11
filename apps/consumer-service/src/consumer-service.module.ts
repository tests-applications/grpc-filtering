import { Module } from '@nestjs/common';
import { ConsumerServiceController } from './consumer-service.controller';
import { ConsumerService } from './consumer-service.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: 'USER_PACKAGE',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            package: 'user.v1',
            protoPath: join(
              __dirname,
              '../../../proto/user.proto'
            ),
            url: configService.get<string>('PRODUCER_URL'),
          },
        })
      },
    ]),
  ],
  controllers: [ConsumerServiceController],
  providers: [ConsumerService],
})
export class ConsumerServiceModule {}
