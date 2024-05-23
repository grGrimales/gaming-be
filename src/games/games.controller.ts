import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}


  
  @Get(':slug')
  findGamesByPlatform(@Param('slug') slug: string) {
    return this.gamesService.findGamesByPlatform(slug);
  }


  @Get('find-one-by-slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.gamesService.findOneBySlug(slug);
  }


  



  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }




}
