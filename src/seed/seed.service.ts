import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/entities/user.entity';
import mongoose, { Model } from 'mongoose';
import { UserService } from '../user/user.service';
import { Game } from '../games/entities/game.entity';
import { nintendoBySlugDummy, pcBySlugDummy, playstationBySlugDummy, xboxBySlugDummy } from '../games/data-dummy';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,

    @InjectModel('Game') private readonly GameModel: Model<Game>,



    private readonly userService: UserService,
  ) { }

  async create() {

    // Delete all users
    await this.userModel.deleteMany({}).exec();

    // Create new users
    const users = [
      {
        "email": "carlos@gmail.com",
        "password": "123456",
        "name": "Carlos",
        "userName": "super carlos"
      },
      {
        "email": "lucia@gmail.com",
        "password": "123456",
        "name": "Lucia",
        "userName": "super lucia"
      },
    ]

    // create promises array
    const usersPromises = users.map(async (user) => {
      return await this.userService.register(user);
    });

    // execute promises
    await Promise.all(usersPromises).then((values) => {
      console.log(values);
    });


    // Delete all games
    await this.GameModel.deleteMany({}).exec();
    // return playstationBySlugDummy;
    // break;
    // case "pc":
    // return pcBySlugDummy;
    // break;
    // case "nintendo":
    //return nintendoBySlugDummy;


    // Create new games
    const gamesPromises =
      nintendoBySlugDummy.data.concat(
        pcBySlugDummy.data.concat(
          xboxBySlugDummy.data.concat(playstationBySlugDummy.data))).map(async (game) => {
            return await this.GameModel.create(game);
          }
          );

    // execute promises
    await Promise.all(gamesPromises).then((values) => {
      console.log(values);
    });




    return 'Seed created';

  }

  findAll() {
    return `This action returns all seed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }

  update(id: number, updateSeedDto: UpdateSeedDto) {
    return `This action updates a #${id} seed`;
  }

  remove(id: number) {
    return `This action removes a #${id} seed`;
  }
}
