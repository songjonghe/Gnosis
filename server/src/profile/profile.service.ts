import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './entities/profile.entity';
import { Model } from 'mongoose';
@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    try {
      const profile = new this.profileModel(createProfileDto);
      return await profile.save();
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return `This action returns all profile`;
  }

  async findOne(id: string): Promise<Profile> {
    try {
      const profile = await this.profileModel.findOne({ id: id });
      return profile;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }



}
