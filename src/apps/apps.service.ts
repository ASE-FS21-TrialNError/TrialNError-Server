import { Injectable } from '@nestjs/common';
import { Apps } from './models/apps';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginatedResponse } from 'src/common/interface/paginated.response';

@Injectable()
export class AppsService {
  constructor(
    @InjectModel(Apps) 
    private readonly appsModel: ReturnModelType<typeof Apps>,
  ) {}

  async getAllApps(
    category_andr: string ="",
    page: number = 1,
    limit: number = 10,
  ): Promise<PaginatedResponse<Apps>> {
    const result = await this.appsModel.paginate(
      { category_andr },
     { page, limit, sort: { release_date_andr: -1 } },
    );
    return {
      totalPages: result.pages,
      items: result.docs,
      total: result.total,
    };
  }
}
