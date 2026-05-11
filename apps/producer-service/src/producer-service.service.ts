import {
  Injectable,
  Logger,
} from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs/promises';
import { ConfigService } from '@nestjs/config';
import { User } from './producer-service.interface';
import { RpcException } from '@nestjs/microservices';


@Injectable()
export class ProducerService {
  private readonly logger = new Logger(ProducerService.name);

  constructor(
    private readonly configService: ConfigService,
  ) {}

  async getFilteredUsers() {
    try {
      const path = this.configService.get<string>('USERS_FILE_PATH');

      this.logger.log(`Reading file: ${path}`);

      const file = await fs.readFile(path, 'utf8');

      this.logger.log(`File loaded successfully`);

      const users: User[] = JSON.parse(file);

      const filteredUsers = users.filter((user: User) => user.age > 18);

      return {
        users: filteredUsers,
      };
    } catch (error) {
      this.logger.error('Failed to process users.json', error.stack);

      throw new RpcException('Failed to process users');
    }
  }
}
