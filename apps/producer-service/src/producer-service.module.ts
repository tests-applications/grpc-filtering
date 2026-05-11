import { Module } from '@nestjs/common';
import { ProducerServiceController } from './producer-service.controller';
import { ProducerService } from './producer-service.service';

@Module({
  imports: [],
  controllers: [ProducerServiceController],
  providers: [ProducerService],
})
export class ProducerServiceModule {}
