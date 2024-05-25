import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { PaginationDTO } from '../commons/dto/PaginationDTO';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}


  
  @Get(':slug')
  findGamesByPlatform(
    @Param('slug') slug: string,
    @Query() paginationDTO: PaginationDTO
    
    ) {
    return this.gamesService.findGamesByPlatform(slug, paginationDTO);
  }


  @Get('find-one-by-slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.gamesService.findOneBySlug(slug);
  }


  







}
