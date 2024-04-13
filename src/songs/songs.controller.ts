import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    // return 'This action returns all songs';
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'This action returns a #${id} song';
  }

  @Post()
  create() {
    // return 'This action adds a new song';
    return this.songsService.create('song 1');
  }

  @Put(':id')
  update() {
    return 'This action updates a #${id} song';
  }

  @Delete(':id')
  delete() {
    return 'This action removes a #${id} song';
  }
}
