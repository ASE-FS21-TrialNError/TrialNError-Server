import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { JwtAuthGaurd } from '../common/utils/helpers';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserProfileDto } from './dto/user-profile.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGaurd())
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Get endpoint for get all users 
  @Get()
  async getUsers(@AuthUser() user: User): Promise<User[] | null> {
    return await this.usersService.findAll();
  }
 //Get endpoint for get  users info
  @Get('profile')
  getUser(@AuthUser() user: UserDto): UserProfileDto {
   // await this.usersService.getUser()
    const { email, id, firstname ,lastname} = user || {};
    return { email, id, firstname ,lastname};
  }
}
