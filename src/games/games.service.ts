import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { InjectModel } from '@nestjs/mongoose';
import  { Model } from 'mongoose';

@Injectable()
export class GamesService {


  constructor(
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


    return {
      status: 200,
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
