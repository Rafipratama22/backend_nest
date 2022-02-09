import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { MovieModel } from './models/movie.interface';
import { MoviesService } from './movies.service';
import { Response } from 'express';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() movie: MovieModel, @Res() res: Response) {
    console.log({ movie });
    const createMovie = await this.moviesService.create(movie);
    res.status(HttpStatus.CREATED).json(createMovie);
  }

  @Get()
  async find(@Res() res: Response) {
    const movieAll: MovieModel[] = await this.moviesService.findAll();
    res.status(HttpStatus.OK).json(movieAll);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const movieDetail: MovieModel = await this.moviesService.findOne(id);
    res.status(HttpStatus.OK).json(movieDetail);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() movie: MovieModel,
    @Res() response: Response,
  ) {
    await this.moviesService.updateOne(id, movie);
    response
      .status(HttpStatus.CREATED)
      .send({ message: 'successs for update' });
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    await this.moviesService.remove(id);
    res.status(HttpStatus.ACCEPTED).send({ message: 'success for delete' });
  }
}
