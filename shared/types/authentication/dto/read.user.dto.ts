import { CommonUserDto } from './common.user.dto';

export interface ReadUsersDto extends CommonUserDto {
  readonly id: string;
}
