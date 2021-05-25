import { plugin, prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import * as paginate from 'mongoose-paginate';
import { Paginate } from 'src/common/utils/paginate';
 //Model for  users  
interface User extends Base, Paginate {}
@plugin(paginate)
class User extends TimeStamps {
  id: string;
  

  @prop({ required: true })
  firstname!: string;

  @prop({ required: true })
  lastname!: string;

  @prop({ unique: true, required: true })
  email!: string;
}

export { User };
