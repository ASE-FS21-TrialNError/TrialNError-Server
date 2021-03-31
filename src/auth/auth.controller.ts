import { Controller, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { IResponse } from 'src/common/interface/response.interface';
import { ResponseSuccess } from 'src/common/dto/response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('email/register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.authService.registerUser(createUserDto);
     const shouldSendEmail = await this.authService.createEmailToken(
       newUser.email,
     );
     if (shouldSendEmail) {
       const sent = await this.authService.sendEmailVerification(newUser.email);
     }
    const userAuth = await this.authService.getByEmail(newUser.email);
    const accessToken = await this.authService.getAccessTokenFromUser(userAuth);
    return new ResponseSuccess('LOGIN.EMAIL_VERIFIED', accessToken);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() login: { email: string; password: string },
  ): Promise<IResponse<any>> {
    const response = await this.authService.validateLogin(
      login.email,
      login.password,
    );
    return new ResponseSuccess('LOGIN.SUCCESS', response);
  }

  @Post('email/otp')
  public async verifyEmail(
    @Body('email') email: string,
    @Body('token') token: string,
  ): Promise<IResponse<any>> {
    const response = await this.authService.verifyEmail(email, token);
    return new ResponseSuccess('LOGIN.EMAIL_VERIFIED', response);
  }
}
