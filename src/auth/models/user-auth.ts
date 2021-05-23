import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop, pre, arrayProp } from '@typegoose/typegoose';
import { hashSync } from 'bcrypt';

interface UserAuth extends Base {}
//user auth model
@pre<UserAuth>('save', function() {
  if (this.isModified('password')) {
    this.password = hashSync(this.password, 10);
  }
})
class UserAuth extends TimeStamps {
  id: string;
  @prop({ unique: true, required: true })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop({ default: true })
  emailVerified!: boolean;
}

export { UserAuth };
