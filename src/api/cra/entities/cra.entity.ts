import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    presenceHalfDays: string;

  @Column({ type: 'varchar' })
    awayHalfDays: string;

  @Column({ type: 'varchar' })
    providerVisa: string;

  @Column({ type: 'varchar' })
    clientVisa: string;
}
