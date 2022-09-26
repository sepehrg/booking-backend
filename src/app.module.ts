import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'booking',
      password: 'booking',
      database: 'booking',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HotelModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
