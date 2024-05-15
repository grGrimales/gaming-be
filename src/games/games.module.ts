import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { PlatformService } from '../platform/platform.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PlatformService],

})
export class GamesModule {}
