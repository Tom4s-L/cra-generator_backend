import { CraDay } from 'src/api/cra-days/entities/cra-day.entity';
import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cra {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar' })
    society: string;

  @Column({ type: 'varchar' })
    collaborator: string;

  @Column({ type: 'varchar' })
    beginingDate: string;

  @Column({ type: 'varchar' })
    endDate: string;

  @Column({ type: 'varchar' })
    presenceHalfDays: number;

  @Column({ type: 'varchar' })
    absenceHalfDays: number;

  @Column({ type: 'varchar' })
    providerVisa: string;

  @Column({ type: 'varchar' })
    clientVisa: string;

  @OneToMany(() => CraDay, (craDay) => craDay.cra)
    craDays: CraDay[];
}
