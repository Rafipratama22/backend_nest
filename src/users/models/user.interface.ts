import { Movie } from 'src/movies/entities/movie.entity';

export interface UserInterface {
  id?: number;
  firstname?: string;
  lastname?: string;
  age?: number;
  movies?: Movie[];
}
