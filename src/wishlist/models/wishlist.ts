import { plugin, prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongoose';
import * as paginate from 'mongoose-paginate';
import { Paginate } from '../../common/utils/paginate';

interface Wishlist extends Base, Paginate {}
//Wishlist obejcts and field 
@plugin(paginate)
class Wishlist extends TimeStamps {
  @prop({ unique: true, required: true })
  userEmail: string;

  @prop({ required: true })
  apps: ObjectId[] = [];

}

export { Wishlist };
