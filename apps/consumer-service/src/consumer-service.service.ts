import { Injectable, Logger } from '@nestjs/common';
import { GetFilteredUsersType } from './consumer-service.type';

@Injectable()
export class ConsumerServiceService {
  private readonly logger = new Logger(ConsumerServiceService.name);

  async getFilteredUsers(data: GetFilteredUsersType) {
    this.logger.log('FilteredUsers:', data);
    return {};
  }
}
