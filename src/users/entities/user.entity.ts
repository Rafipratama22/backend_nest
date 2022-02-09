import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @OneToMany(() => Movie, (movie) => movie.user)
  @JoinColumn()
  movies: Movie[];
}
