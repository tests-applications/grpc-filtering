import { Controller, Get } from '@nestjs/common';
import { ProducerServiceService } from './producer-service.service';

@Controller()
export class ProducerServiceController {
  constructor(
    private readonly producerServiceService: ProducerServiceService,
  ) {}

  @Get('start')
  readAndFilter() {
    return this.producerServiceService.readAndFilter();
  }
}
