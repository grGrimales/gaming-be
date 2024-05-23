import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { GameSchema } from '../games/entities/game.entity';

@Module({
  controllers: [SeedController],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema}]),
    
  ],
  providers: [SeedService, UserService],
})
export class SeedModule {}
