import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import {
  GetFilteredUsersResponse,
  UserService,
} from './consumer-service.interface';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ConsumerService implements OnModuleInit {
  private readonly logger = new Logger(ConsumerService.name);
  private userService: UserService;

  constructor(
    @Inject('USER_PACKAGE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  async getFilteredUsers(): Promise<{ message: string }> {
    try {
      const response = await firstValueFrom(this.userService.getFilteredUsers({}));

      this.logger.log(`Filtered Users: `, response.users);
      return { message: 'Log completed, check console' };
    } catch (error) {
      this.logger.error(`Failed to fetch filtered users: ${error}`);

      throw error;
    }
  }
}
