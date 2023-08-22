import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProfileService } from './profile.service';

import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { UserService } from 'src/user/user.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('v1/profile')
export class ProfileController {
  constructor(
    private profileService: ProfileService,
    private userService: UserService,
  ) { }

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    const newProfile = await this.profileService.create(createProfileDto);
    if (!newProfile) {
      try {
        await this.userService.remove(createProfileDto.id);
      } catch (error) {
        throw new Error(error);
      }
    } else {
      this.userService.update(createProfileDto.id, { profile: newProfile.id });
    }
    return newProfile;
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }


}
