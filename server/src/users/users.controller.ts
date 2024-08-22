import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { ReadUsersDto, ValidatedCreatedUsersDto } from '@shared/types';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/all')
  async getAllUsers(): Promise<ReadUsersDto[]> {
    return this.userService.getAllUsers();
  }

  @Post('/create')
  async createUser(@Body() createUserDto: ValidatedCreatedUsersDto) {
    const id = await this.userService.createUser(createUserDto);
    return { id };
  }
}
