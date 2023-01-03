import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MorningEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}
export enum AfternoonEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}

@Entity()
export class CraDay {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar' })
    name: string;

  @Column({ type: 'varchar' })
    date: string;

  @Column({ type: 'enum', enum: MorningEnum })
    morning: string;

  @Column({ type: 'enum', enum: AfternoonEnum })
    afternoon: string;

  @Column({ type: 'boolean' })
    workMode: boolean;

  @Column({ type: 'varchar' })
    comment: string;
}
