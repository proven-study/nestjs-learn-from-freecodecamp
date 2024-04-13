import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    try {
      // return 'This action returns all songs';
      return this.songsService.findAll();
    } catch (error) {
      console.log('error', error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      // ParseIntPipe, // default behavior
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), // custom behavior
    )
    id: number,
  ) {
    return `This action returns a #${id} song`;
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    // return 'This action adds a new song';
    // return this.songsService.create('song 1');
    return this.songsService.create(createSongDTO);
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
