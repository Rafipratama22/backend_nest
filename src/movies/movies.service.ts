import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MovieModel } from './models/movie.interface';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private MovieRepository: Repository<Movie>,
  ) {}

  create(movie: MovieModel): Promise<MovieModel> {
    try {
      return this.MovieRepository.save(movie);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  findAll(): Promise<MovieModel[]> {
    try {
      return this.MovieRepository.find();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  findOne(id: number): Promise<MovieModel> {
    try {
      return this.MovieRepository.findOne(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  remove(id: number): Promise<any> {
    try {
      return this.MovieRepository.delete(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  updateOne(id: number, movie: MovieModel): Promise<any> {
    try {
      return this.MovieRepository.update(id, movie);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
