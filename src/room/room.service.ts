import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { RoomUpdateDto } from './dto/room.update.dto';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomsRepository: Repository<Room>,
  ) {}

  async update(id: number, updateDto: RoomUpdateDto): Promise<UpdateResult> {
    const room = await this.roomsRepository.findOneByOrFail({ id });
    if (room) {
      return await this.roomsRepository.update(id, updateDto);
    }
  }
}
