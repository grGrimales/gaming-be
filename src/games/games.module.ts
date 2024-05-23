import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { PlatformService } from '../platform/platform.service';


import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from '../games/entities/game.entity';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PlatformService],
  imports: [
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema}]),
  ],

})
export class GamesModule {}
