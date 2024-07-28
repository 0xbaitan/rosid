import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export interface CreateUsersDto {
  readonly name: string;

  readonly age: number;

  readonly email: string;
}

export class ValidatedCreatedUsersDto implements CreateUsersDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(13)
  @Max(100)
  public readonly age: number;
}
