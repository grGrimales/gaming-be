
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PlatformModule } from './platform/platform.module';
import { GamesModule } from './games/games.module';
import { UserSchema } from './user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
    }),
    MongooseModule.forFeature([{ name: 'User', schema:UserSchema}]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
