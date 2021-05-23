import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserAuth } from './models/user-auth';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateUserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/models/user';
import {  compare } from 'bcrypt';
import { EmailVerification } from './models/email-verification';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { AppException } from '../common/exception/app.exception';
import { APP_ERROR_CODES } from '../common/constants/api-error-codes';
import { getRandomEmailOtp } from '../common/utils/helpers';
import {
  EMAIL_TEMPLATES,
} from '../common/constants/application.contants';
import { join } from 'path';
import { Wishlist } from '../wishlist/models/wishlist';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserAuth)
    private readonly userAuthModel: ReturnModelType<typeof UserAuth>,

    @InjectModel(Wishlist)
    private readonly wishlisModel: ReturnModelType<typeof Wishlist>,

    @InjectModel(EmailVerification)
    private readonly emailVerificationModel: ReturnModelType<
      typeof EmailVerification
    >,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  // Create new user
  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, firstname,lastname } = createUserDto;
    const userAuthRegistered = await this.getByEmail(email);
    //check if email is already exist
    if (!userAuthRegistered) {
      const userAuth = new UserAuth();
      userAuth.email = email;
      userAuth.password = password;
      this.createWishList(email);
      return this.userAuthModel.create(userAuth).then(userAuthCreated => {
        return this.usersService.create({
          _id: userAuthCreated._id,
          id: userAuthCreated.id,
          email,
          firstname,
          lastname
        });
        
      });
    } else if (userAuthRegistered.emailVerified === false) {
      return await this.usersService.getByEmail(email);
    } else {
      throw new AppException(APP_ERROR_CODES.REGISTRATION.EMAIL_ALREADY_EXISTS);
    }
  }
  //create wishlist for user 
  createWishList(email: string)
  {
    const wishlist=new Wishlist;
    wishlist.userEmail=email;
    this.wishlisModel.create(wishlist)
  }
//create auth
  create(userAuth: UserAuth): Promise<UserAuth> {
    return this.userAuthModel.create(userAuth);
  }

  //get auth by  ID
  get(id: string): Promise<UserAuth> {
    return this.userAuthModel.findById(id).exec();
  }

  //get auth by email ID
  getByEmail(email: string): Promise<UserAuth> {
    return this.userAuthModel.findOne({ email }).exec();
  }

  //Check if email is authorized 
  async createEmailToken(email: string): Promise<boolean> {
    const emailVerification = await this.emailVerificationModel.findOne({
      email,
    });
    // TODO (createEmailToken):use momentjs for date diff
    if (
      emailVerification &&
      (new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 <
        15
    ) {
      return false;
    } else {
      const emailVerificationModel = await this.emailVerificationModel
        .findOneAndUpdate(
          { email },
          {
            email,
            emailToken: getRandomEmailOtp(),
            timestamp: new Date(),
          },
          { upsert: true },
        )
        .exec();
      return true;
    }
  }

  
//send OTP email
  async sendEmailVerification(email: string): Promise<boolean> {
    const emailVerification = await this.emailVerificationModel
      .findOne({
        email,
      })
      .exec();
    try {
      const info = await this.mailerService.sendMail({
        to: email, // list of receivers
        subject: 'Confirm Email address.',
        template: EMAIL_TEMPLATES.LOGIN_OTP_EMAIL,
        context: {
          otp: emailVerification.emailToken,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw new AppException(APP_ERROR_CODES.REGISTRATION.EMAIL_NOT_SENT);
    }
  }

  async validateLogin(
    email: string,
    password: string,
  ) {
    const userAuth = await this.userAuthModel.findOne({ email });
    //check if user is exist
    if (!userAuth) {
      throw new AppException(APP_ERROR_CODES.LOGIN.USER_NOT_FOUND);
    } else if (userAuth.emailVerified === false) {
      throw new AppException(APP_ERROR_CODES.LOGIN.EMAIL_NOT_VERIFIED);
    }
    //check the user password
    const isValidPass = await compare(password, userAuth.password);


    if (isValidPass) {
      return this.getAccessTokenFromUser(userAuth);
    } else {
      throw new AppException(APP_ERROR_CODES.LOGIN.INVALID_CREDENTIALS);
    }
  }

  //get user token
  getAccessTokenFromUser(userAuth: UserAuth) {
    const payload = {
      email: userAuth.email,
      sub: userAuth.id,
    };
    const accessToken = this.jwtService.sign(payload);
    return { token: accessToken };
  }
  //send Token
  async verifyEmail(email: string, token: string) {
    const emailVerification = await this.emailVerificationModel.findOne({
      email,
      emailToken: token,
    });
    if (emailVerification && emailVerification.email) {
      const userFromDb = await this.userAuthModel
        .findOne({
          email: emailVerification.email,
        })
        .exec();
      userFromDb.emailVerified = true;
      const savedUser = await userFromDb.save();
      await emailVerification.remove();
      return this.getAccessTokenFromUser(userFromDb);
    } else {
      throw new AppException(APP_ERROR_CODES.REGISTRATION.EMAIL_OTP_NOT_VALID);
    }
  }

}
