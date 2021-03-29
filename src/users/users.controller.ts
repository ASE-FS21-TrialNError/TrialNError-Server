import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { JwtAuthGaurd } from 'src/common/utils/helpers';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserProfileDto } from './dto/user-profile.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGaurd())
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@AuthUser() user: User): Promise<User[] | null> {
    return await this.usersService.findAll();
  }

  @Get('profile')
  getUser(@AuthUser() user: UserDto): UserProfileDto {
    const { email, id, name } = user;
    return { email, id, name };
  }
}
