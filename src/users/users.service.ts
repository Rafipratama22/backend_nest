import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserInterface } from './models/user.interface';
// import { Movie } from '../movies/entities/movie.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  async create(user: UserInterface): Promise<InsertResult> {
    try {
      const data = await this.UserRepository.insert(user);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async findAll(): Promise<UserInterface[]> {
    try {
      return this.UserRepository.find({
        relations: ['movies'],
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async findOne(id: number): Promise<UserInterface> {
    try {
      return this.UserRepository.findOne(id, {
        relations: ['movies'],
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
