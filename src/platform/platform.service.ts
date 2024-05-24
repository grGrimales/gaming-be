import { Injectable } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { xboxBySlugDummy } from '../games/data-dummy/xbox';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Platform } from './entities/platform.entity';

@Injectable()
export class PlatformService {

  constructor(
    @InjectModel('Platform') private readonly platformModel: Model<Platform>,
  ) { }


  create(createPlatformDto: CreatePlatformDto) {
    return 'This action adds a new platform';
  }

  async findAll() {

    const platforms = await this.platformModel.find().exec();


    return {
      status: 200,
      data: platforms,
    }
  }


  async getPlatformBySlug(slug: string) {

    const platform = await this.platformModel.findOne({
      'attributes.slug': slug
    }).exec();


    //this.findAll().data.find((platform) => platform.attributes.slug === slug);

    return {
      status: 200,
      data: platform
    }

  }






}
