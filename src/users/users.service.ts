import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(userDto: UserDto): Promise<User> {
    const { firstname, lastname,email } = userDto;
    const user = new User();
    user.firstname = firstname;
    user.lastname=lastname;
    user.email = email;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return this.userModel.create(user);
  }

  async findAll(): Promise<User[] | null> {
    return this.userModel.find().exec();
  }

  getUser(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  getByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  updateUser(userId, user: Partial<User>) {
    return this.userModel.findByIdAndUpdate(userId, user).exec();
  }
}
