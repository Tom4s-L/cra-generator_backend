import { Cra } from 'src/api/cra/entities/cra.entity';
import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

export enum PresenceEnum {
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

  @Column({ type: 'enum', enum: PresenceEnum })
    morning: string;

  @Column({ type: 'enum', enum: PresenceEnum })
    afternoon: string;

  @Column({ type: 'boolean' })
    remote: boolean;

  @Column({ type: 'varchar', nullable: true })
    comment: string;

  @ManyToOne(() => Cra, (cra) => cra.craDays)
    cra: Cra;
}
