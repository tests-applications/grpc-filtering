import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import {
  GetFilteredUsersRequest,
  GetFilteredUsersRequestList,
  UserService,
} from './producer-service.interface';
import { join } from 'path';
import * as fs from 'fs/promises';

@Injectable()
export class ProducerServiceService implements OnModuleInit {
  private userService: UserService;

  constructor(
    @Inject('USER_PACKAGE')
    private client: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  async readAndFilter() {
    const file = await fs.readFile(join(process.cwd(), 'apps/producer-service/src/data', 'user.json'), 'utf8');
    const users = JSON.parse(file);
    const filteredUsers = users.filter(user => user.age > 18);

    this.userService.getFilteredUsers({ users: filteredUsers }).subscribe();
  }
}
