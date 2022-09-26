import { Hotel } from 'src/hotel/hotel.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { Room } from 'src/room/room.entity';

type PartialHotel = Omit<Partial<Hotel>, 'rooms'> & {
  rooms: Partial<Room>[];
};

export class initData1664115121729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hotelRepo = queryRunner.connection.getRepository(Hotel);
    const hotels: PartialHotel[] = [
      {
        name: 'Hilton',
        images: '269263515.jpg;269268055.jpg',
        rooms: [
          {
            name: 'Budget Double Room',
            adults: 2,
            children: 0,
            price: 240,
          },

          {
            name: 'Twin Room',
            adults: 2,
            children: 1,
            price: 345,
          },
        ],
      },
      {
        name: 'Ashford',
        images: '269268532.jpg;269269148.jpg',
        rooms: [
          {
            name: 'Single Room',
            adults: 1,
            children: 0,
            price: 120,
          },
          {
            name: 'Budget Double Room',
            adults: 2,
            children: 0,
            price: 340,
          },
        ],
      },
      {
        name: 'Mantis',
        images: '269263543.jpg;269268579.jpg',
        rooms: [
          {
            name: 'Budget Double Room',
            adults: 2,
            children: 0,
            price: 400,
          },
          {
            name: 'Delux King',
            adults: 2,
            children: 2,
            price: 500,
          },
        ],
      },
    ];
    hotelRepo.save(hotels);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const hotelRepo = queryRunner.connection.getRepository(Hotel);
    await hotelRepo.remove(await hotelRepo.find());
  }
}
