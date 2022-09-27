import { ApiProperty } from '@nestjs/swagger';
import { RoomUpdateDto } from 'src/room/dto/room.update.dto';

export class HotelUpdateDto {
  @ApiProperty({ example: 'hotel name' })
  name: string;

  @ApiProperty({ example: 'image file names separated by ;' })
  images: string;
}
