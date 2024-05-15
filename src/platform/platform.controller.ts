import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';

@Controller('platforms')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  create(@Body() createPlatformDto: CreatePlatformDto) {
    return this.platformService.create(createPlatformDto);
  }

  @Get()
  findAll() {
    return this.platformService.findAll();
  }


  @Get(':slug')
  getPlatformBySlug(
    @Param('slug') slug: string,
  ) {
    return this.platformService.getPlatformBySlug(slug);
  }

  

}
