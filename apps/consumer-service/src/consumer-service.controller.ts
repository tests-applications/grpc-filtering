import { Controller, Get } from '@nestjs/common';
import { ConsumerService } from './consumer-service.service';

@Controller()
export class ConsumerServiceController {
  constructor(
    private readonly consumerService: ConsumerService
  ) {}

  @Get('filtered-users')
  async getFilteredUsers() {
    return await this.consumerService.getFilteredUsers();
  }
}
