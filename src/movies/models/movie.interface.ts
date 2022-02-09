import { User } from 'src/users/entities/user.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MovieModel {
  id?: number;
  name?: string;
  genre?: string;
  description?: string;
  rating?: number;
  user?: User;
}
