import { ApiProperty } from '@nestjs/swagger';

export class RoomUpdateDto {
  @ApiProperty({ example: 'room name' })
  name: string;

  @ApiProperty({ example: '2', minimum: 1, maxItems: 5 })
  adults: number;

  @ApiProperty({ example: '2', minimum: 1, maxItems: 5 })
  children: number;

  @ApiProperty({ example: '100', minimum: 10, maxItems: 1000 })
  price: number;
}
