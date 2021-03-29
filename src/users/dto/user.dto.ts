import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @Exclude()
  @IsNotEmpty()
  password: string;
}

export interface UserDto {
  _id: Types.ObjectId;
  id: string;
  name: string;
  email: string;
  roles?: string[];
}
