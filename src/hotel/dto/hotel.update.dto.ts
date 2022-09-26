import { RoomUpdateDto } from 'src/room/dto/room.update.dto';

export class HotelUpdateDto {
  name: string;
  images: string;
  rooms: RoomUpdateDto[];
}
