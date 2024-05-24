import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatformSchema } from './entities/platform.entity';

@Module({
  controllers: [PlatformController],
  providers: [PlatformService],
  imports: [
    MongooseModule.forFeature([{ name: 'Platform', schema: PlatformSchema}]),
  ],
})
export class PlatformModule {}
