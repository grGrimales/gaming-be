import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { GameSchema } from '../games/entities/game.entity';
import { PlatformSchema } from '../platform/entities/platform.entity';

@Module({
  controllers: [SeedController],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema}]),
    MongooseModule.forFeature([{ name: 'Platform', schema: PlatformSchema}]),
  ],
  providers: [SeedService, UserService],
})
export class SeedModule {}
