import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { xboxBySlugDummy, playstationBySlugDummy, pcBySlugDummy, nintendoBySlugDummy } from '../games/data-dummy';
import { PlatformService } from '../platform/platform.service';
import { Game } from './entities/game.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { count } from 'console';

@Injectable()
export class GamesService {


  constructor(
    private platformService: PlatformService,
    @InjectModel('Game') private readonly GameModel: Model<Game>,
  ) {
  }

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }



  async findGamesByPlatform(slug: string) {

    const games = await this.GameModel.find({
      'attributes.platform.data.attributes.slug': slug
    }).exec();


    return games;
 

    //const data = this.findAll().data;

    switch (slug) {

      case "xbox":
        return xboxBySlugDummy;
        break;
      case "playstation":
        return playstationBySlugDummy;
        break;
      case "pc":
        return pcBySlugDummy;
        break;
      case "nintendo":
        return nintendoBySlugDummy;
        break;
      default:
        return {
          "data": [],
          "meta": {
            "pagination": {
              "page": 1,
              "pageSize": 30,
              "pageCount": 0,
              "total": 0
            }
          }
        };
    }

  }

  async findOneBySlug(slug: string) {

    const game = await this.GameModel.findOne({
      'attributes.slug': slug
    }).exec();

    return {
      status: 200,
      data: game,
      
    }

  }


  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
