import { ApiProperty } from '@nestjs/swagger';
import { Room } from 'src/room/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Hotel {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  images: string;

  @OneToMany((type) => Room, (room) => room.hotel, {
    cascade: true,
  })
  rooms: Room[];
}
