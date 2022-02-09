import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserInterface } from './models/user.interface';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: UserInterface, @Res() res: Response) {
    const data = await this.usersService.create(user);
    res.status(HttpStatus.CREATED).json(data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const data: UserInterface[] = await this.usersService.findAll();
    res.status(HttpStatus.CREATED).json(data);
  }
}
