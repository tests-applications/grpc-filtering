import { Module } from '@nestjs/common';
import { ProducerServiceController } from './producer-service.controller';
import { ProducerService } from './producer-service.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
  ],
  controllers: [ProducerServiceController],
  providers: [ProducerService],
})
export class ProducerServiceModule {}
