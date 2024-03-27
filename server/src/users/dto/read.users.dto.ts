import { CreateUsersDto } from './create.users.dto';

export interface ReadUsersDto extends CreateUsersDto {
  readonly id: string;
}
