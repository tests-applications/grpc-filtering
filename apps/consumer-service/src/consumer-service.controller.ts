import { Controller } from '@nestjs/common';
import { ConsumerServiceService } from './consumer-service.service';
import { GrpcMethod } from '@nestjs/microservices';
import type { GetFilteredUsersType } from './consumer-service.type';

@Controller()
export class ConsumerServiceController {
  constructor(
    private readonly consumerServiceService: ConsumerServiceService
  ) {}

  @GrpcMethod('UserService', 'GetFilteredUsers')
  async getFilteredUsers(data: GetFilteredUsersType) {
    return await this.consumerServiceService.getFilteredUsers(data);
  }
}
