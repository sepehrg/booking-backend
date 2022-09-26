import { Controller, Get, Req, Body } from '@nestjs/common';
import { Param, Patch } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { HotelUpdateDto } from './dto/hotel.update.dto';
import { Hotel } from './hotel.entity';
import { HotelsService } from './hotel.service';

@Controller('hotels')
@ApiTags('Hotels')
export class HotelsController {
  constructor(private hotelService: HotelsService) {}

  @Get()
  findAll(@Req() request: Request): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDto: HotelUpdateDto,
  ): Promise<UpdateResult> {
    return this.hotelService.update(id, updateDto);
  }
}
