import { Controller, Get, Req, Body } from '@nestjs/common';
import { Param, Patch } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { RoomUpdateDto } from './dto/room.update.dto';
import { RoomsService } from './room.service';

@Controller('rooms')
@ApiTags('Rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDto: RoomUpdateDto,
  ): Promise<UpdateResult> {
    return this.roomsService.update(id, updateDto);
  }
}
