import { adapter } from '@/config';
import { User } from '@/types';
import { isUser } from '@/types/validator';
import Helpers from '@/util/helpers';

export default class UsersApi {
  public static async getAllUsers(): Promise<User[]> {
    const endpoint = Helpers.getApiPath('/users/all');
    const response = await adapter.get(endpoint);
    if (response.status !== 200) {
      throw new Error('Error fetching users');
    }

    const users = response.data;
    console.log(JSON.stringify(users));
    if (!(Array.isArray(users) && users.every((user) => isUser(user)))) {
      throw new Error('Data returned is not an array of users');
    }
    return users;
  }
}
