import { Cra } from 'src/api/cra/entities/cra.entity';
import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CraDay {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar' })
    name: string;

  @Column({ type: 'varchar' })
    date: string;

  @Column({ type: 'boolean' })
    morning: boolean;

  @Column({ type: 'boolean' })
    afternoon: boolean;

  @Column({ type: 'boolean' })
    remote: boolean;

  @Column({ type: 'varchar', nullable: true })
    comment: string;

  @ManyToOne(() => Cra, (cra) => cra.craDays)
    cra: Cra;
}
