import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export class EmailVerification extends Base {
  @prop({ unique: true, required: true })
  email!: string;

  @prop({ required: true })
  emailToken!: string;

  @prop({ required: true })
  timestamp: Date;
}
