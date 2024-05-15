import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../dist/user/entities/user.entity';

@Injectable()
export class AppService {

  constructor(

  
    @InjectModel('User') private readonly userModel,

  ) {}


  seed() {


    try {






      return {
        status: 200,
        message: 'Seed Data'
      }
      
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        message: 'Internal Server Error'
      }
    }

  }
}
