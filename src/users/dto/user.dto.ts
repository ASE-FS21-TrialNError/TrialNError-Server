import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname: string;

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
  firstname: string;
  lastname: string;
  email: string;
}
