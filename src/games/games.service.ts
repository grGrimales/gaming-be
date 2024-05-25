import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationDTO } from '../commons/dto/PaginationDTO';

@Injectable()
export class GamesService {


  constructor(
    @InjectModel('Game') private readonly GameModel: Model<Game>,
  ) {
  }


  async findGamesByPlatform(slug: string, paginationDTO: PaginationDTO) {

    const { page, limit } = paginationDTO;


    const [games, totalGames] = await Promise.all([
      this.GameModel.find({
        'attributes.platform.data.attributes.slug': slug
      })
        .skip(( page - 1 ) * limit)
        .limit(limit),
      this.GameModel.countDocuments({
        'attributes.platform.data.attributes.slug': slug
      })
    ]);


    const lastPage = Math.ceil(totalGames / limit);





    return {
      status: 200,
      meta: {
        total:totalGames,
        page,
        totalPages: Math.ceil(totalGames / limit),
        lastPage
      },
      data: games,

    };


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
}
