import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { xboxBySlugDummy, playstationBySlugDummy, pcBySlugDummy, nintendoBySlugDummy } from '../games/data-dummy';
import { stat } from 'fs';
import { PlatformService } from '../platform/platform.service';

@Injectable()
export class GamesService {


  constructor(
    private platformService: PlatformService
  ) {
  }

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all games`;
  }


  findAllBySlug(slug: string) {

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

  findOneBySlug(slug: string) {

    // Unir toda la data dummy xboxBySlugDummy + playstationBySlugDummy + pcBySlugDummy + nintendoBySlugDummy;

    const data = xboxBySlugDummy.data.concat(playstationBySlugDummy.data, pcBySlugDummy.data, nintendoBySlugDummy.data);

    const game = data.find((game) => game.attributes.slug === slug);

    console.log(game)

    const platformSlug = game.attributes.platform.data.attributes.slug;

    const platform = this.platformService.getPlatformBySlug(platformSlug);

    return {
      status: 200,
      data: game,
      platform
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
