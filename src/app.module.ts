
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { GamesModule } from './games/games.module';
import { PlatformModule } from './platform/platform.module';
import { UserModule } from './user/user.module';


require('dotenv').config()


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
    }),

    SeedModule,
    GamesModule,
    PlatformModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
