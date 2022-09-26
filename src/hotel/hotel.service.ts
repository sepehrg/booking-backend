import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { HotelUpdateDto } from './dto/hotel.update.dto';
import { Hotel } from './hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelsRepository: Repository<Hotel>,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return await this.hotelsRepository.find();
  }

  async findOne(id: number): Promise<Hotel> {
    return await this.hotelsRepository.findOne({
      where: {
        id,
      },
      relations: ['rooms'],
    });
  }

  async update(id: number, updateDto: HotelUpdateDto): Promise<UpdateResult> {
    const hotel = await this.hotelsRepository.findOneByOrFail({ id });
    if (hotel) {
      return await this.hotelsRepository.update(id, updateDto);
    }
  }
}
