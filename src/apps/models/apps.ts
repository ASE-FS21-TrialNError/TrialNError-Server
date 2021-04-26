import { plugin, prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import * as paginate from 'mongoose-paginate';
import { Paginate } from 'src/common/utils/paginate';

interface Apps extends Base, Paginate {}

@plugin(paginate)
class Apps extends TimeStamps {
 
  

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  description!: string;

  @prop({ default: false })
  logodvvdd_url!: string;

  @prop({ default: false })
  app_url_ios!: string;
  
  @prop({ default: false })
  app_url_andr!: string;

  @prop({ default: false })
  category_ios!: string;

  @prop({ default: false })
  category_andr!: string;

  @prop({ default: false })
  price_ios!: number;

  @prop({ default: false })
  price_andr!: number;

  @prop({ default: false })
  rating_ios!: number;

  @prop({ default: false })
  rating_andr!: number;

  @prop({ default: false })
  rating_count_ios!: number;

  @prop({ default: false })
  rating_count_andr!: number;

  @prop({ default: false })
  size_ios!: string;

  @prop({ default: false })
  size_andr!: number;

  @prop({ default: false })
  min_vers_ios!: string;

  @prop({ default: false })
  min_vers_andr!: string;

  @prop({ default: false })
  release_date_ios!: string;

  @prop({ default: false })
  release_date_andr!: string;

  @prop({ default: false })
  update_date_ios!: string;

  @prop({ default: false })
  update_date_andr!: string;

  @prop({ default: false })
  content_rating_ios!: string;

  @prop({ default: false })
  content_rating_andr!: string;
  
}

export { Apps };
