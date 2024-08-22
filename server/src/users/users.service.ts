import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schema';
import { Model } from 'mongoose';
import { CreateUsersDto, ReadUsersDto } from '@shared/types';

@Injectable()
export class UsersService {
  public constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async createUser(createUserDto: CreateUsersDto): Promise<number> {
    const newUser = new this.usersModel(createUserDto);
    const result = await newUser.save();
    return result.id;
  }

  async getAllUsers(): Promise<ReadUsersDto[]> {
    const allUsers = await this.usersModel.find().exec();
    return allUsers.map((user) => {
      const userDto: ReadUsersDto = {
        id: user.id,
        name: user.name,
        age: user.age,
        email: user.email,
      };
      return userDto;
    });
  }
}
