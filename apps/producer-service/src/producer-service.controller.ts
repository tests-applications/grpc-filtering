import { Controller } from '@nestjs/common';
import { ProducerService } from './producer-service.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetFilteredUsersResponse } from '../../consumer-service/src/consumer-service.interface';

@Controller()
export class ProducerServiceController {
  constructor(
    private readonly producerService: ProducerService,
  ) {}

  @GrpcMethod('UserService', 'GetFilteredUsers')
  async getFilteredUsers(): Promise<GetFilteredUsersResponse> {
    return await this.producerService.getFilteredUsers();
  }
}
