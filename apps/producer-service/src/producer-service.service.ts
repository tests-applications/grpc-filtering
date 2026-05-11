import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs/promises';
import { ConfigService } from '@nestjs/config';
import { User } from './producer-service.interface';


@Injectable()
export class ProducerService {
  private readonly logger = new Logger(ProducerService.name);

  constructor(
    private readonly configService: ConfigService,
  ) {}

  async getFilteredUsers() {
    try {
      const file = await fs.readFile(
        join(
          process.cwd(),
          this.configService.get<string>('USERS_FILE_PATH')
        ),
        'utf8'
      );

      const users: User[] = JSON.parse(file);

      const filteredUsers = users.filter((user: User) => user.age > 18);

      return {
        users: filteredUsers,
      };
    } catch (error) {
      this.logger.error('Failed to process users.json', error.stack);

      throw new InternalServerErrorException('Failed to process users');
    }
  }
}
